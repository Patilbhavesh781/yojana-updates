import mongoose, { Schema, Document, Model } from "mongoose";

export interface INews extends Document {
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  relatedScheme?: string;
  sourceUrl?: string;
  publishedAt: Date;
  featured: boolean;
  views: number;
  lastViewedAt?: Date;
}

const NewsSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: "Scheme Updates" },
    relatedScheme: { type: String },
    sourceUrl: { type: String },
    publishedAt: { type: Date, default: Date.now },
    featured: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    lastViewedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const News: Model<INews> =
  mongoose.models.News || mongoose.model<INews>("News", NewsSchema);

