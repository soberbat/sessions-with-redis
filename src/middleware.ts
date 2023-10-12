import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
  const cookie = request.cookies.get("sessionCookie");

  if (!cookie) {
    const destinationUrl = new URL("/", new URL(request.url).origin);
    const response = NextResponse.redirect(destinationUrl);
    return response;
  }
}

export const config = {
  matcher: "/dashboard",
};
