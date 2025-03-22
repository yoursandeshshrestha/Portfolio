import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set Last-Modified header
  response.headers.set("Last-Modified", new Date().toUTCString());

  return response;
}

export const config = {
  matcher: "/",
};
