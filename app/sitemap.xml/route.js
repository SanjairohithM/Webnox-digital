export async function GET() {
  try {
    // Import the generateSitemapXMLContent function
    const { generateSitemapXMLContent } = await import('../../scripts/generate-sitemap.js');
    
    // Generate the sitemap XML content
    const sitemapContent = generateSitemapXMLContent();
    
    // Return content - Vercel will handle headers via vercel.json
    return new Response(sitemapContent, {
      status: 200,
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback to a basic sitemap if generation fails
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.webnoxdigital.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;  
    
    return new Response(fallbackSitemap, {
      status: 200,
    });
  }
}
