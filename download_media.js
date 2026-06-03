const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Create directories
const photosDir = path.join(__dirname, 'public', 'photos');
const videosDir = path.join(__dirname, 'public', 'videos');
fs.mkdirSync(photosDir, { recursive: true });
fs.mkdirSync(videosDir, { recursive: true });

// Read scraped data
const profile = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'raw', 'profile.json'), 'utf8'));
const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'raw', 'posts.json'), 'utf8'));

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url) { resolve('SKIP'); return; }
    const protocol = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.instagram.com/'
      },
      timeout: 30000
    };
    
    const file = fs.createWriteStream(dest);
    protocol.get(url, options, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        fs.unlinkSync(dest);
        resolve('FAIL-' + response.statusCode);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve('OK'); });
      file.on('error', (err) => { fs.unlinkSync(dest); resolve('FAIL'); });
    }).on('error', (err) => {
      try { fs.unlinkSync(dest); } catch(e) {}
      resolve('FAIL');
    }).on('timeout', () => {
      try { fs.unlinkSync(dest); } catch(e) {}
      resolve('TIMEOUT');
    });
  });
}

async function main() {
  let downloads = [];
  
  // Download profile pic
  if (profile[0]?.profilePicUrlHD) {
    downloads.push({ url: profile[0].profilePicUrlHD, dest: path.join(photosDir, 'profile.jpg'), label: 'profile pic' });
  }
  
  // Process posts
  posts.forEach((post, i) => {
    const idx = String(i).padStart(2, '0');
    
    // Main display image
    if (post.displayUrl) {
      downloads.push({ url: post.displayUrl, dest: path.join(photosDir, `post_${idx}.jpg`), label: `post ${i} image` });
    }
    
    // Video
    if (post.videoUrl) {
      downloads.push({ url: post.videoUrl, dest: path.join(videosDir, `post_${idx}.mp4`), label: `post ${i} video` });
    }
    
    // Carousel/sidecar images
    if (post.images && post.images.length > 0) {
      post.images.forEach((imgUrl, j) => {
        downloads.push({ url: imgUrl, dest: path.join(photosDir, `post_${idx}_${j}.jpg`), label: `post ${i} carousel ${j}` });
      });
    }
    
    // Child posts (sidecars)
    if (post.childPosts && post.childPosts.length > 0) {
      post.childPosts.forEach((child, j) => {
        if (child.displayUrl) {
          downloads.push({ url: child.displayUrl, dest: path.join(photosDir, `post_${idx}_child_${j}.jpg`), label: `post ${i} child ${j} image` });
        }
        if (child.videoUrl) {
          downloads.push({ url: child.videoUrl, dest: path.join(videosDir, `post_${idx}_child_${j}.mp4`), label: `post ${i} child ${j} video` });
        }
      });
    }
  });
  
  console.log(`Total downloads queued: ${downloads.length}`);
  
  let ok = 0, fail = 0, skip = 0;
  
  // Download in batches of 5
  for (let i = 0; i < downloads.length; i += 5) {
    const batch = downloads.slice(i, i + 5);
    const results = await Promise.all(batch.map(d => downloadFile(d.url, d.dest)));
    results.forEach((r, j) => {
      const dl = batch[j];
      if (r === 'OK') { ok++; console.log(`OK: ${dl.label}`); }
      else if (r === 'SKIP') { skip++; }
      else { fail++; console.log(`${r}: ${dl.label}`); }
    });
  }
  
  console.log(`\nDone! OK: ${ok}, Failed: ${fail}, Skipped: ${skip}`);
}

main().catch(console.error);
