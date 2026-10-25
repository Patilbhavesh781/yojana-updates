import mongoose, { Schema, Document, Model } from "mongoose";

export interface IScheme extends Document {
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: "Farmer" | "Student" | "Women" | "Business" | "Housing" | "Health" | "Pension" | "General";
  type: "Central" | "State";
  state?: string;
  beneficiary: string;
  benefits: string[];
  eligibility: string[];
  documentsRequired: string[];
  howToApply: { stepNumber: number; title: string; description: string }[];
  officialPortalUrl: string;
  applicationDeadline?: string;
  status: "Active" | "Upcoming" | "Closed";
  helplineNumber?: string;
  faqs: { question: string; answer: string }[];
  featured: boolean;
  views: number;
  lastViewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SchemeSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Farmer", "Student", "Women", "Business", "Housing", "Health", "Pension", "General"],
      index: true,
    },
    type: { type: String, required: true, enum: ["Central", "State"], index: true },
    state: { type: String, default: "All India", index: true },
    beneficiary: { type: String, required: true },
    benefits: [{ type: String }],
    eligibility: [{ type: String }],
    documentsRequired: [{ type: String }],
    howToApply: [
      {
        stepNumber: { type: Number },
        title: { type: String },
        description: { type: String },
      },
    ],
    officialPortalUrl: { type: String, required: true },
    applicationDeadline: { type: String, default: "Ongoing" },
    status: { type: String, default: "Active", enum: ["Active", "Upcoming", "Closed"] },
    helplineNumber: { type: String },
    faqs: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
    featured: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    lastViewedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Scheme: Model<IScheme> =
  mongoose.models.Scheme || mongoose.model<IScheme>("Scheme", SchemeSchema);

