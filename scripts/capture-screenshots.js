const { chromium } = require('playwright');
const path = require('path');

const sites = [
  { url: 'https://www.uob.com.sg', file: 'uob.jpg' },
  { url: 'https://www.singpass.gov.sg', file: 'singpass.jpg' },
  { url: 'https://www.corppass.gov.sg', file: 'corppass.jpg' },
  { url: 'https://www.aia.com.au/en/health-and-wellbeing/aia-vitality', file: 'aia.jpg' },
];

const dest = path.join(__dirname, '..', 'public', 'images', 'projects');

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const site of sites) {
    console.log(`Capturing ${site.url}...`);
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1400, height: 900 });
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch {
      await page.waitForTimeout(5000);
    }
    await page.waitForTimeout(10000);
    await page.evaluate(() => { document.body.style.zoom = '0.8'; });
    await page.waitForTimeout(1000);
    const outPath = path.join(dest, site.file);
    await page.screenshot({ path: outPath, type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 1400, height: 900 } });
    console.log(`Saved: ${outPath}`);
    await page.close();
  }
  await browser.close();
  console.log('Done!');
})();
