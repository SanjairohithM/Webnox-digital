export async function GET() {
  const robotsContent = `# *
User-agent: *
Allow: /
Disallow: /admin/*
Disallow: /api/*
Disallow: /_next/*
Disallow: /test/*
Disallow: /demo/*

# Host
Host: https://www.webnoxdigital.com

# Sitemaps
Sitemap: https://www.webnoxdigital.com/sitemap.xml`;

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
