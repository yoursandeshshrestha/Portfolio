import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // Set Last-Modified header
  response.headers.set("Last-Modified", new Date().toUTCString());

  return response;
}

export const config = {
  matcher: "/",
};
