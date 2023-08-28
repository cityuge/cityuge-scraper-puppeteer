const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({ 
        headless: false,
        slowMo: 100,
        devtools: true
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });

    const link = 'https://www.google.com/';

    await page.goto(link);

    await page.waitForSelector('div form div:nth-child(2) input');

    await page.click('div form div:nth-child(2) input');

    await page.keyboard.type('puppeteer');

    await page.keyboard.press('Enter');

    await page.waitForSelector('div#resultStats');
})();