const fs = require('fs');
const https = require('https');
const path = require('path');

const destDir = path.join(__dirname, '..', 'public', 'images', 'tools');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Download list for the ones that failed, using Clearbit PNGs
const downloadList = [
  { name: 'vwo.png', url: 'https://logo.clearbit.com/vwo.com' },
  { name: 'optimizely.png', url: 'https://logo.clearbit.com/optimizely.com' },
  { name: 'metaadsmanager.png', url: 'https://logo.clearbit.com/meta.com' },
  { name: 'activecampaign.png', url: 'https://logo.clearbit.com/activecampaign.com' },
  { name: 'klaviyo.png', url: 'https://logo.clearbit.com/klaviyo.com' },
  { name: 'brevo.png', url: 'https://logo.clearbit.com/brevo.com' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting logo downloads for failed ones to ${destDir}...`);
  for (const item of downloadList) {
    const dest = path.join(destDir, item.name);
    try {
      await download(item.url, dest);
      console.log(`Successfully downloaded ${item.name}`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All downloads finished!');
}

run();
