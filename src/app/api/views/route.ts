import { NextRequest, NextResponse } from "next/server";
import {
  incrementSchemeViews,
  incrementNewsViews,
  getRealTimeAnalytics,
  getSchemeBySlug,
  getNewsBySlug,
} from "@/lib/schemeService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, slug } = body;

    if (!slug) {
      return NextResponse.json({ error: "Missing slug parameter" }, { status: 400 });
    }

    if (type === "news") {
      const result = await incrementNewsViews(slug);
      if (!result) {
        return NextResponse.json({ error: "News article not found" }, { status: 404 });
      }
      return NextResponse.json({
        success: true,
        type: "news",
        slug,
        views: result.views,
        lastViewedAt: result.lastViewedAt,
      });
    }

    // Default to scheme
    const result = await incrementSchemeViews(slug);
    if (!result) {
      return NextResponse.json({ error: "Scheme not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      type: "scheme",
      slug,
      views: result.views,
      lastViewedAt: result.lastViewedAt,
    });
  } catch (err: any) {
    console.error("View tracking API error:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const stats = searchParams.get("stats");
  const type = searchParams.get("type") || "scheme";
  const slug = searchParams.get("slug");

  try {
    if (stats === "true") {
      const analytics = await getRealTimeAnalytics();
      return NextResponse.json(analytics);
    }

    if (slug) {
      if (type === "news") {
        const item = await getNewsBySlug(slug);
        if (!item) {
          return NextResponse.json({ error: "News not found" }, { status: 404 });
        }
        return NextResponse.json({
          views: item.views || 0,
          lastViewedAt: item.lastViewedAt || item.publishedAt,
        });
      }

      const scheme = await getSchemeBySlug(slug);
      if (!scheme) {
        return NextResponse.json({ error: "Scheme not found" }, { status: 404 });
      }
      return NextResponse.json({
        views: scheme.views || 0,
        lastViewedAt: scheme.lastViewedAt || scheme.updatedAt,
      });
    }

    const analytics = await getRealTimeAnalytics();
    return NextResponse.json(analytics);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

