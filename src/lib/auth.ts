export function verifyAdminAuth(request: Request): boolean {
  const envKey = process.env.ADMIN_SECRET_KEY || "yojana_admin_2025";
  const authHeader = request.headers.get("x-admin-key");

  // Check header
  if (authHeader && authHeader === envKey) {
    return true;
  }

  // Check secure cookie
  const cookieHeader = request.headers.get("cookie");
  if (cookieHeader) {
    const cookieMatch = cookieHeader.match(/admin_token=([^;]+)/);
    if (cookieMatch && decodeURIComponent(cookieMatch[1]) === envKey) {
      return true;
    }
  }

  return false;
}

