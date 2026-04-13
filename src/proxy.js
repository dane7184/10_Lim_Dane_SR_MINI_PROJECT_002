import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function proxy(req) {
  console.log(req);

  const session = await auth();
  const { pathname } = req.nextUrl;

  if (!session) {
    if (
      pathname.startsWith("/products") ||
      pathname.startsWith("/manage-products") ||
      pathname.startsWith("/orders") ||
      pathname.startsWith("/cart") ||
      pathname.startsWith("/profile")
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (session && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/products/:path*",
    "/manage-products/:path*",
    "/orders/:path*",
    "/cart/:path*",
    "/profile/:path*",
  ],
};
