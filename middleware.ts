import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "";

if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in environment variables");
}

const encodedSecret = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Protect /dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(token, encodedSecret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    // Allow access to login and signup pages
    if (pathname === "/admin/login" || pathname === "/admin/signup") {
      if (token) {
        try {
          const { payload } = await jwtVerify(token, encodedSecret);
          if (payload.role === "admin") {
            return NextResponse.redirect(new URL("/admin", request.url));
          }
        } catch {
          // Token invalid, allow access to admin login/signup
          return NextResponse.next();
        }
      }
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const { payload } = await jwtVerify(token, encodedSecret);

      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Redirect logged-in users away from auth pages
  if (token && (pathname === "/login" || pathname === "/signup")) {
    try {
      const { payload } = await jwtVerify(token, encodedSecret);
      const redirectUrl = payload.role === "admin" ? "/admin" : "/dashboard";
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    } catch {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
};
