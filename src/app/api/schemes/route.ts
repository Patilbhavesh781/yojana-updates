import { NextResponse } from "next/server";
import { getAllSchemes, createScheme, getSchemeById, updateScheme } from "@/lib/schemeService";
import { verifyAdminAuth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Scheme } from "@/lib/models/Scheme";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const scheme = await getSchemeById(id);
      if (!scheme) {
        return NextResponse.json({ success: false, error: "Scheme not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, scheme });
    }

    const category = searchParams.get("category") || undefined;
    const type = searchParams.get("type") || undefined;
    const state = searchParams.get("state") || undefined;
    const search = searchParams.get("search") || undefined;

    const schemes = await getAllSchemes({ category, type, state, search });
    return NextResponse.json({ success: true, count: schemes.length, schemes });
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
    if (!body.title || !body.summary || !body.description || !body.category) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: title, summary, description, category" },
        { status: 400 }
      );
    }

    const created = await createScheme(body);
    return NextResponse.json({ success: true, scheme: created }, { status: 201 });
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
      return NextResponse.json({ success: false, error: "Missing scheme id" }, { status: 400 });
    }

    const updated = await updateScheme(id, body);
    return NextResponse.json({ success: true, scheme: updated });
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
      if (id) await Scheme.findByIdAndDelete(id);
      else if (slug) await Scheme.findOneAndDelete({ slug });
    }

    return NextResponse.json({ success: true, message: "Scheme deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
