import { NextResponse, NextRequest } from "next/server";

export async function middleware(req) {
  let verify = req.cookies?.get("auth_token");
  let url = req.url;
  //if local host is this then odo it
  if (url === "https://business.elverr.com/") {
    if (!verify && url.includes("/mainpage")) {
      return NextResponse.redirect("https://business.elverr.com/");
    }
    if (verify && url === "https://business.elverr.com/") {
      return NextResponse.rewrite("http://localhost:3000/mainpage");
    }
  }
  if (url === "http://localhost:3000/") {
    if (!verify && url.includes("/mainpage")) {
      return NextResponse.redirect("http://localhost:3000/");
    }
    if (verify && url === "http://localhost:3000/") {
      return NextResponse.rewrite("http://localhost:3000/mainpage");
    }
  }
}
