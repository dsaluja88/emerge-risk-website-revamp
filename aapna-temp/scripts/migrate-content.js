const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PAGES_TO_SCRAPE = [
  { url: 'https://www.aapnainfotech.com/about-us/', slug: 'about' },
  { url: 'https://www.aapnainfotech.com/services/', slug: 'services' }
];

// Target directories in the NEXT.JS app
const PUBLIC_IMG_DIR = path.join(__dirname, '../../aapna-infotech/public/images/scraped');
const DATA_DIR = path.join(__dirname, '../../aapna-infotech/data');

// Ensure directories exist
if (!fs.existsSync(PUBLIC_IMG_DIR)) fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        resolve(null); // ignore errors to continue
      }
    }).on('error', resolve); // ignore errors
  });
}

async function scrapePage(page) {
  console.log(`Scraping ${page.url}...`);
  try {
    const { data } = await axios.get(page.url);
    const $ = cheerio.load(data);
    
    const contentData = {
      title: $('h1').first().text().trim() || page.slug,
      sections: []
    };

    const elements = $('h2, h3, p, img');
    
    let currentSection = { heading: null, paragraphs: [], images: [] };

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const tagName = el.tagName.toLowerCase();

      if (tagName === 'h2' || tagName === 'h3') {
        if (currentSection.paragraphs.length > 0 || currentSection.images.length > 0) {
          contentData.sections.push(currentSection);
        }
        currentSection = { heading: $(el).text().trim(), paragraphs: [], images: [] };
      } else if (tagName === 'p') {
        const text = $(el).text().trim();
        if (text && text.length > 20) { 
          currentSection.paragraphs.push(text);
        }
      } else if (tagName === 'img') {
        let src = $(el).attr('src');
        if (src && src.startsWith('http')) {
          const filename = path.basename(src.split('?')[0]);
          const localPath = path.join(PUBLIC_IMG_DIR, filename);
          const relativeUrl = `/images/scraped/${filename}`;
          
          await downloadImage(src, localPath);
          currentSection.images.push({
            url: relativeUrl,
            alt: $(el).attr('alt') || ''
          });
        }
      }
    }
    
    if (currentSection.paragraphs.length > 0 || currentSection.images.length > 0) {
      contentData.sections.push(currentSection);
    }

    fs.writeFileSync(path.join(DATA_DIR, `${page.slug}.json`), JSON.stringify(contentData, null, 2));
    console.log(`Saved ${page.slug}.json`);

  } catch (err) {
    console.error(`Failed to scrape ${page.url}:`, err.message);
  }
}

async function run() {
  for (const page of PAGES_TO_SCRAPE) {
    await scrapePage(page);
  }
  console.log('Scraping complete!');
}

run();
