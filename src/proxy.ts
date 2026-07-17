import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const FURRY_FRIENDS_HOST = "toxictofurryfriends.mingyiliu.com";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== FURRY_FRIENDS_HOST) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.pathname = "/youdu";

  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: "/",
};
