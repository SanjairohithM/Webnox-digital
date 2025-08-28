# Sitemap Setup for Webnox Digital

## Overview
This project uses a custom sitemap generation script to automatically create XML sitemaps and robots.txt files for better SEO.

## Files Generated
- `public/sitemap.xml` - Complete sitemap with all URLs
- `public/robots.txt` - Robots file for search engine crawlers

## Configuration
The sitemap configuration is in `scripts/generate-sitemap.js` and includes:

### Main Settings
- **Site URL**: https://www.webnoxdigital.com
- **Change Frequency**: Configurable per route
- **Priority**: Configurable per route (0.0 to 1.0)

### Included Routes
- Homepage (priority: 1.0, daily updates)
- About Us (priority: 0.8, monthly updates)
- Services (priority: 0.9, weekly updates)
- Contact (priority: 0.8, monthly updates)
- Case Studies (priority: 0.8, weekly updates)
- Blogs (priority: 0.7, weekly updates)
- All service pages (priority: 0.9, weekly updates)

### Excluded Routes
- `/admin/*` - Admin areas
- `/api/*` - API endpoints
- `/test/*` - Test pages
- `/demo/*` - Demo pages
- `/_next/*` - Next.js internal files

## Usage

### Automatic Generation
The sitemap is automatically generated after each build:
```bash
npm run build
# This will trigger the postbuild script: node scripts/generate-sitemap.js
```

### Manual Generation
To generate the sitemap manually:
```bash
npm run sitemap
# or
node scripts/generate-sitemap.js
```

### Package Scripts
```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "node scripts/generate-sitemap.js",
    "sitemap": "node scripts/generate-sitemap.js"
  }
}
```

## SEO Benefits
1. **Search Engine Discovery**: Helps search engines find all your pages
2. **Crawl Efficiency**: Provides optimal crawling paths
3. **Indexing Priority**: Sets appropriate priorities for different page types
4. **Update Frequency**: Indicates how often content changes

## Google Search Console Setup
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: https://www.webnoxdigital.com
3. Submit your sitemap: https://www.webnoxdigital.com/sitemap.xml
4. Monitor indexing status and crawl errors

## Maintenance
- The sitemap automatically updates with each build
- URLs are manually defined in the script for complete control
- New routes can be easily added to the `routes` array
- Old routes can be easily removed from the `routes` array

## Customization
To modify the sitemap configuration, edit `scripts/generate-sitemap.js`:

- Add new routes to the `routes` array
- Modify priorities and change frequencies
- Update the robots.txt content
- Customize the XML structure if needed

## Adding New Routes
To add a new route, simply add it to the `routes` array in `scripts/generate-sitemap.js`:

```javascript
{
  loc: '/new-service',
  changefreq: 'weekly',
  priority: 0.9,
  lastmod: new Date().toISOString(),
}
```

## Troubleshooting
If the sitemap isn't generating:
1. Check that the scripts directory exists
2. Verify the script file has proper permissions
3. Run manual generation: `npm run sitemap`
4. Check the console for error messages

## Dependencies
- Node.js: 18.0.0+
- No external packages required (uses built-in Node.js modules)

## Advantages of Custom Approach
1. **No Build Dependencies**: Works without Next.js build manifest
2. **Complete Control**: Full control over sitemap structure and content
3. **Fast Execution**: No external package overhead
4. **Easy Maintenance**: Simple JavaScript file to modify
5. **Reliable**: No dependency on external packages or build processes
