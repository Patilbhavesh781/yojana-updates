import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { key } = await request.json();
    const envKey = process.env.ADMIN_SECRET_KEY || "yojana_admin_2025";

    // Strictly enforce the exact ADMIN_SECRET_KEY configured in .env
    if (!key || key !== envKey) {
      return NextResponse.json(
        { success: false, error: "Access Denied: Incorrect Admin Secret Key" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });
    // Set secure HttpOnly cookie
    response.cookies.set("admin_token", key, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
  return response;
}
