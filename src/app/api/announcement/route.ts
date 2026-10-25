import { NextRequest, NextResponse } from "next/server";
import { getHeaderAnnouncement, updateHeaderAnnouncement } from "@/lib/schemeService";
import { verifyAdminAuth } from "@/lib/auth";

export async function GET() {
  try {
    const announcement = await getHeaderAnnouncement();
    return NextResponse.json({ success: true, announcement });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!verifyAdminAuth(req)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access: Invalid or missing admin key" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { text, link, enabled } = body;

    if (!text || !text.trim()) {
      return NextResponse.json(
        { success: false, error: "Announcement text cannot be empty" },
        { status: 400 }
      );
    }

    const updated = await updateHeaderAnnouncement(
      text.trim(),
      link ? link.trim() : "",
      enabled !== false
    );

    return NextResponse.json({
      success: true,
      message: "Header announcement updated successfully!",
      announcement: updated,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

