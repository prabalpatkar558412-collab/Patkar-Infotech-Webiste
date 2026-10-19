import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname.toLowerCase() !== "patkarinfotech.com") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.hostname = "www.patkarinfotech.com";
  destination.protocol = "https:";
  return NextResponse.redirect(destination, 308);
}
