import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({req: req, secret: process.env.NEXTAUTH_SECRET});
  const { pathname } = req.nextUrl;

  if (req.nextUrl.pathname.startsWith("/_next/")) {
    return true;
  }

  if (pathname.includes("/api/auth" || token)) {
    return NextResponse.next();
  }

  // If no token exists
  if (!token && pathname !== "/")
  {
      return NextResponse.redirect("http://localhost:3000/");
  }
}
