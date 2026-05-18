const { chromium } = require('playwright');
const dest = 'D:/PROJECTS/portfolio2/public/images/projects/aia.jpg';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1750, height: 1100 }
  });
  const page = await ctx.newPage();

  page.goto('https://www.aia.com.au/en/health-and-wellbeing/aia-vitality').catch(() => {});
  await page.waitForTimeout(15000);

  try { await page.keyboard.press('Escape'); } catch (e) {}
  await page.waitForTimeout(1000);

  await page.evaluate(() => { document.body.style.zoom = '0.8'; });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: dest, type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 1400, height: 900 } });
  const size = require('fs').statSync(dest).size;
  console.log('Saved:', size, 'bytes. Title:', await page.title());
  await browser.close();
})();
