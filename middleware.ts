import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/news", "/search", "/favorites"];

export const middleware = async (request: NextRequest) => {
  const session = await auth();
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.includes(pathname);
  if (isProtected && !session)
    return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
};
