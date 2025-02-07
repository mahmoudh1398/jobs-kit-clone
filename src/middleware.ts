import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/actions/authActions";
import { webRoute } from "./lib/services/routes/webRoute";

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await getSession();
  if (pathname === webRoute.login()) {
    if (session?.token) {
      return NextResponse.redirect(new URL(webRoute.dashboard(), req.url));
    }
    return NextResponse.next();
  }

  if (pathname === webRoute.dashboard() && !session?.token) {
    return NextResponse.redirect(new URL(webRoute.login(), req.url));
  }

  // Allow authenticated users to access the route
  return NextResponse.next();
}
