import { NextResponse } from "next/server";
const PROTECTED = ["/dashboard", "/crm", "/clients"];
export function middleware(req){
  const { pathname } = req.nextUrl;
  const protect = PROTECTED.some(p => pathname.startsWith(p));
  if (!protect) return NextResponse.next();
  const cookie = req.cookies.get("ol_user")?.value || "";
  if (!cookie){
    const url = req.nextUrl.clone();
    url.pathname = "/app-connexion";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*", "/crm/:path*", "/clients/:path*"] };
