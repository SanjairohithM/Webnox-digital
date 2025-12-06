import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, search } = request.nextUrl
  const url = request.nextUrl.toString()
  
  // Block spam query parameters (specifically ?site=, ?j=, etc.)
  const spamQueryParams = [
    /[?&]site=/i,
    /[?&]j=/i,
    /[?&]ref=/i,
  ]
  
  // Check if URL contains spam query parameters
  const hasSpamQuery = spamQueryParams.some(pattern => pattern.test(url))
  
  if (hasSpamQuery) {
    // Return 404 for spam URLs with noindex header
    return new NextResponse(null, {
      status: 404,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    })
  }
  
  // Block suspicious paths (spam content patterns)
  // Check both pathname and full URL (in case of URL encoding)
  const decodedPath = decodeURIComponent(pathname)
  const decodedUrl = decodeURIComponent(url)
  
  const spamPatterns = [
    /tafsir/i,
    /mimpi/i,
    /udang/i,
    /bergambar/i,
    /bersetubuh/i,
    /\.html$/i,
    /\.html\?/i, // .html with query params
  ]
  
  // Check both original and decoded versions
  const isSpamPath = spamPatterns.some(pattern => 
    pattern.test(pathname) || 
    pattern.test(decodedPath) ||
    pattern.test(url) ||
    pattern.test(decodedUrl)
  )
  
  if (isSpamPath) {
    // Return 404 with noindex headers to prevent indexing
    return new NextResponse(
      JSON.stringify({ error: 'Not Found' }),
      {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-Type': 'application/json',
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
        },
      }
    )
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml and robots.txt
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|json)).*)',
  ],
}

