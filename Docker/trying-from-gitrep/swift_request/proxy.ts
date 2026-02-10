import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isLoggedIn = !!token;
    const userRole = token?.role;
    const userid = token?.id;
    const pathname = req.nextUrl.pathname;

    //Redirect logged-in users away from login page
    if (pathname.startsWith("/login") && isLoggedIn) {
      return NextResponse.redirect(new URL("/employee/dashboard", req.url));
    }

    //Protect Admin Routes
    if (pathname.startsWith("/admin")) {
      if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      if (userRole !== "ADMIN") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    if (pathname.startsWith("/ticket")) {
      if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    if (pathname.startsWith("/employee")) {
      if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/employee/:path*",
    "/dashboard/:path*",
    "/login",
    "/ticket/:path*",
  ],
};
