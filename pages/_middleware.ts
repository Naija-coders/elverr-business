import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const {cookies} = request
  const jwt = cookies?.auth_token;
  if (request.nextUrl.pathname.startsWith('/')) {
try {
  if(jwt=== undefined){
    console.log("requested url",request.url)
    return NextResponse.rewrite(new URL('/', request.url))
  }
  else{
    return NextResponse.rewrite(new URL('/mainpage', request.url))
  }

} catch (error) {
  
}
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    
    'favicon.ico.*'
  ],
}