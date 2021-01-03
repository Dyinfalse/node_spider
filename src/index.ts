const puppeteer = require('puppeteer');
const TEST_URL = 'https://v.douyin.com/JsHx4sw/';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone X']);
    await page.goto(TEST_URL);
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();