import { NextResponse } from "next/server";
import { getAllNews, getNewsById, updateNews } from "@/lib/schemeService";
import { verifyAdminAuth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { News } from "@/lib/models/News";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const item = await getNewsById(id);
      if (!item) {
        return NextResponse.json({ success: false, error: "News item not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, news: item });
    }

    const news = await getAllNews();
    return NextResponse.json({ success: true, count: news.length, news });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAdminAuth(request)) {
      return NextResponse.json({ success: false, error: "Unauthorized access: Invalid or missing secret key" }, { status: 401 });
    }

    const body = await request.json();
    if (!body.title || !body.summary || !body.content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: title, summary, content" },
        { status: 400 }
      );
    }

    const slug =
      body.slug ||
      body.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") ||
      `news-${Date.now()}`;

    const newNewsData = {
      title: body.title,
      slug,
      summary: body.summary,
      content: body.content,
      category: body.category || "Scheme Updates",
      relatedScheme: body.relatedScheme || "",
      sourceUrl: body.sourceUrl || "",
      publishedAt: new Date(),
      featured: Boolean(body.featured),
      views: 0,
    };

    const db = await connectToDatabase();
    if (db) {
      const created = await News.create(newNewsData);
      return NextResponse.json({ success: true, news: created }, { status: 201 });
    }

    return NextResponse.json(
      { success: true, news: { ...newNewsData, id: `mem-${Date.now()}` } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAdminAuth(request)) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const body = await request.json();
    const id = body.id || body._id;

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing news id" }, { status: 400 });
    }

    const updated = await updateNews(id, body);
    return NextResponse.json({ success: true, news: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAdminAuth(request)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (!id && !slug) {
      return NextResponse.json({ success: false, error: "Missing id or slug" }, { status: 400 });
    }

    const db = await connectToDatabase();
    if (db) {
      if (id) await News.findByIdAndDelete(id);
      else if (slug) await News.findOneAndDelete({ slug });
    }

    return NextResponse.json({ success: true, message: "News deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
