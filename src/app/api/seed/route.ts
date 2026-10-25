import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Scheme } from "@/lib/models/Scheme";
import { News } from "@/lib/models/News";
import { initialSchemes, initialNews } from "@/lib/data";
import { verifyAdminAuth } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    if (!verifyAdminAuth(request)) {
      return NextResponse.json({ success: false, error: "Unauthorized access: Invalid secret key" }, { status: 401 });
    }

    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({
        success: false,
        message: "MongoDB connection is not established. Check your MONGODB_URI in .env",
      });
    }

    // Seed Schemes
    let seededSchemes = 0;
    for (const scheme of initialSchemes) {
      const exists = await Scheme.findOne({ slug: scheme.slug });
      if (!exists) {
        await Scheme.create(scheme);
        seededSchemes++;
      }
    }

    // Seed News
    let seededNews = 0;
    for (const item of initialNews) {
      const exists = await News.findOne({ slug: item.slug });
      if (!exists) {
        await News.create(item);
        seededNews++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Database seeded successfully. Added ${seededSchemes} new schemes and ${seededNews} news items.`,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
