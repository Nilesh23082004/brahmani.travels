import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Prevent Vercel preview deployments from being indexed by search engines.
 * When VERCEL_ENV !== "production", inject X-Robots-Tag: noindex on every response.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (process.env.VERCEL_ENV !== "production") {
    response.headers.set("X-Robots-Tag", "noindex");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files, images, and Next.js internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|images|logo|robots.txt|sitemap.xml).*)",
  ],
};

