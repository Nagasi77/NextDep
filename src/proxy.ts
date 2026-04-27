// Contoh isi src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

export function mainMiddleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/admin", "/profile", "/produk"]);

export const config = {
  matcher: ["/admin", "/profile", "/produk"],
};