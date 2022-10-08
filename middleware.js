import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("auth_token");
  let url = req.url;

  if (!verify && url.includes("/mainpage")) {
    return NextResponse.redirect("https://business.elverr.com/");
  }

  if (verify && url === "https://business.elverr.com/") {
    return NextResponse.rewrite("https://business.elverr.com/mainpage");
  }
  if (verify && url === "http://localhost:3000/") {
    return NextResponse.rewrite("http://localhost:3000/mainpage");
  }
}
/* return NextResponse.rewrite(new URL('/dashboard/user', request.url)) */
