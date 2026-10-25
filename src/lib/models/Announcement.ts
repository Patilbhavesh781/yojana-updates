import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAnnouncement extends Document {
  key: string;
  text: string;
  link?: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AnnouncementSchema: Schema = new Schema(
  {
    key: { type: String, required: true, unique: true, default: "header_announcement" },
    text: { type: String, required: true },
    link: { type: String, default: "" },
    enabled: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Announcement: Model<IAnnouncement> =
  mongoose.models.Announcement ||
  mongoose.model<IAnnouncement>("Announcement", AnnouncementSchema);

