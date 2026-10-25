import dns from "node:dns";
import mongoose from "mongoose";

// Configure reliable DNS servers for Windows / Node.js DNS resolution
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {
  // Safe fallback
}

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

async function connectWithRetry(uri: string, retries = 2, delayMs = 1000): Promise<typeof mongoose | null> {
  const opts = {
    bufferCommands: false,
    serverSelectionTimeoutMS: 15000, // 15 seconds allows Next.js initial heavy cold-compilation to complete
    connectTimeoutMS: 15000,
  };

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      const mongooseInstance = await mongoose.connect(uri, opts);
      console.log("✅ Connected to MongoDB successfully.");
      return mongooseInstance;
    } catch (err: any) {
      if (attempt <= retries) {
        console.warn(`⏳ MongoDB initial connect attempt ${attempt} waiting ${delayMs}ms before retry...`);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      } else {
        console.error("❌ MongoDB connection error:", err.message);
        return null;
      }
    }
  }
  return null;
}

export async function connectToDatabase(): Promise<typeof mongoose | null> {
  if (!MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI is not defined. Running in memory / fallback mode.");
    return null;
  }

  if (cached.conn && cached.conn.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connectWithRetry(MONGODB_URI).then((instance) => {
      if (!instance) {
        cached.promise = null;
      }
      return instance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
}
