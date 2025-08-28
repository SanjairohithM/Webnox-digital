const http = require('http');

// Test the sitemap route headers
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/sitemap.xml',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; SitemapTester/1.0)'
  }
};

const req = http.request(options, (res) => {
  console.log('✅ Response Status:', res.statusCode);
  console.log('📋 Response Headers:');
  
  // Check the content-type header
  const contentType = res.headers['content-type'];
  console.log(`   Content-Type: ${contentType}`);
  
  if (contentType && contentType.includes('application/xml')) {
    console.log('🎉 SUCCESS: Content-Type is correctly set to application/xml');
  } else {
    console.log('❌ ERROR: Content-Type is not application/xml');
    console.log(`   Expected: application/xml`);
    console.log(`   Got: ${contentType}`);
  }
  
  // Check other important headers
  console.log(`   Cache-Control: ${res.headers['cache-control']}`);
  console.log(`   Content-Length: ${res.headers['content-length']}`);
  
  // Read the response body to verify content
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('\n📄 Response Body Preview:');
    console.log(data.substring(0, 200) + '...');
    
    // Check if it's valid XML
    if (data.includes('<?xml') && data.includes('<urlset')) {
      console.log('✅ SUCCESS: Response contains valid XML structure');
    } else {
      console.log('❌ ERROR: Response does not contain valid XML');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request Error:', error.message);
  console.log('\n💡 Make sure your development server is running:');
  console.log('   npm run dev');
});

req.end();

console.log('🔍 Testing sitemap headers...');
console.log('   URL: http://localhost:3000/sitemap.xml');
console.log('   Expected Content-Type: application/xml\n');
