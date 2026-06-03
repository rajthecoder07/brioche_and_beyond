const fs = require('fs');
const path = require('path');

const TOKEN = process.env.APIFY_TOKEN || fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8')
  .split('\n').find(l => l.startsWith('APIFY_TOKEN=')).split('=').slice(1).join('=').trim();

async function scrapeProfile() {
  console.log('Scraping profile...');
  const res = await fetch(
    'https://api.apify.com/v2/acts/apify~instagram-profile-scraper/run-sync-get-dataset-items?timeout=120',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usernames: ['brioche_and_beyond']
      })
    }
  );
  
  if (!res.ok) {
    console.error('Profile scrape failed:', res.status, await res.text());
    process.exit(1);
  }
  
  const data = await res.json();
  fs.writeFileSync(
    path.join(__dirname, 'data', 'raw', 'profile.json'),
    JSON.stringify(data, null, 2)
  );
  console.log('Profile saved. Items:', data.length);
  if (data.length > 0) {
    console.log('Profile keys:', Object.keys(data[0]).join(', '));
  }
}

async function scrapePosts() {
  console.log('Scraping posts...');
  const res = await fetch(
    'https://api.apify.com/v2/acts/apify~instagram-scraper/run-sync-get-dataset-items?timeout=180',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        directUrls: ['https://www.instagram.com/brioche_and_beyond/'],
        resultsType: 'posts',
        resultsLimit: 30
      })
    }
  );
  
  if (!res.ok) {
    console.error('Posts scrape failed:', res.status, await res.text());
    process.exit(1);
  }
  
  const data = await res.json();
  fs.writeFileSync(
    path.join(__dirname, 'data', 'raw', 'posts.json'),
    JSON.stringify(data, null, 2)
  );
  console.log('Posts saved. Items:', data.length);
  if (data.length > 0) {
    console.log('Post keys:', Object.keys(data[0]).join(', '));
  }
}

(async () => {
  await scrapeProfile();
  await scrapePosts();
  console.log('Done!');
})();
