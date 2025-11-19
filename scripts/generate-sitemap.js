const fs = require('fs');
const path = require('path');

// Define all the routes for Webnox Digital with proper SEO priorities and changefreq
const routes = [
  // Core pages - highest priority
  {
    loc: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/contact-us',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/about-us',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  // Main service category pages
  {
    loc: '/services',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/ai-services',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/AI-automation',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  // High-value service pages
  {
    loc: '/app-development-services',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/software-development',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/digital-transformation-services',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/digital-transformation-services-uk',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/digital-transformation-services-usa',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/custom-web-solutions',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/branding-agency',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/ui-ux-design-services',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  // Medium-value service pages
  {
    loc: '/cloud-devops-services',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/e-commerce-services',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/data-analytics',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/Data-analytics',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/customer-experience',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/emerging-tech',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/Emerging-tech',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/it-consulting',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/IT-consulting',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/next-gen-marketing',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/Next-gen-marketing',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/outsourcing',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/3d-web-design-services',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/3d-website-development-uk',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/3d-website-development-usa',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/n8n-automation-workflow',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/N8N-automation-workflow',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  // Specialized regional service pages
  {
    loc: '/branding-services-uk',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/branding-services-usa',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/enterprise-web-solutions-uk',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/enterprise-web-solutions-usa',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  // Content pages - lower priority
  {
    loc: '/case-studies',
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/blogs',
    changefreq: 'daily',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  // Legal/Policy pages
  {
    loc: '/privacy-policy',
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString(),
  },
  {
    loc: '/refund-cancellation-policy',
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString(),
  },
];

// Generate sitemap XML
function generateSitemapXML() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://www.webnoxdigital.com${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapContent;
}

// Export the XML generation function for use in API routes
function generateSitemapXMLContent() {
  return generateSitemapXML();
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsContent = `# Webnox Digital Robots.txt
# Allow all web crawlers access to all content

User-agent: *
Allow: /

# Disallow access to admin and API endpoints
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /test/
Disallow: /demo/

# Disallow access to certain file types
Disallow: /*.json$

# Sitemap location
Sitemap: https://www.webnoxdigital.com/sitemap.xml`;

  return robotsContent;
}

// Main function
function generateSitemap() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate and write sitemap.xml
  const sitemapContent = generateSitemapXML();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log('✅ Generated sitemap.xml');

  // Generate and write robots.txt
  const robotsContent = generateRobotsTxt();
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  console.log('✅ Generated robots.txt');

  console.log(`\n🎉 Sitemap generation completed!`);
  console.log(`📁 Files generated in: ${publicDir}`);
  console.log(`🌐 Sitemap URL: https://www.webnoxdigital.com/sitemap.xml`);
  console.log(`🤖 Robots URL: https://www.webnoxdigital.com/robots.txt`);
}

// Run if called directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, routes, generateSitemapXMLContent };
