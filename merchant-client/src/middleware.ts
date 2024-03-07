import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DASHBOARD } from "./routes";
import jwt from "jsonwebtoken";

const protectedRoutes = [DASHBOARD.HOME];

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("auth-token");

  if (token && (path === "/signin" || path === "/signip" || path === "/")) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!token && protectedRoutes.includes(path)) {
    const absoluteURL = new URL("/signin", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  return NextResponse.next();
}
