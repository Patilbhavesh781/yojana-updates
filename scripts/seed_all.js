const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://patilbhavesh781_db_user:yyTJ5vq5m4mTEK5x@cluster0.mnce2lj.mongodb.net/yojana-updates?retryWrites=true&w=majority";

const SchemeSchema = new mongoose.Schema({}, { strict: false });
const NewsSchema = new mongoose.Schema({}, { strict: false });

const Scheme = mongoose.models.Scheme || mongoose.model("Scheme", SchemeSchema);
const News = mongoose.models.News || mongoose.model("News", NewsSchema);

async function run() {
  await mongoose.connect(uri);
  console.log("Connected to Atlas!");

  const schemesCount = await Scheme.countDocuments();
  const newsCount = await News.countDocuments();

  console.log(`Current Atlas counts: Schemes=${schemesCount}, News=${newsCount}`);
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

