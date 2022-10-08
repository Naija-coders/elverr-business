import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("auth_token");
  let url = req.url;

  if (!verify && url.includes("/mainpage")) {
    return NextResponse.redirect(process.env.NEXT_PUBLIC_URL);
  }

  if (verify && url === process.env.NEXT_PUBLIC_URL) {
    return NextResponse.rewrite(process.env.NEXT_PUBLIC_URL + "mainpage");
  }
}
/* return NextResponse.rewrite(new URL('/dashboard/user', request.url)) */
