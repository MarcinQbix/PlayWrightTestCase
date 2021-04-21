const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    // Open new page
    const page = await context.newPage();
    // Go to https://www.skyscanner.pl/
    await page.goto('https://www.skyscanner.pl/');
    // Click button:has-text("OK")
    await page.click('button:has-text("OK")');
    // Fill [aria-label="Multi-city"]
    await page.fill('[aria-label="Multi-city"]', 'on');
    // Click [aria-label="Multi-city"]
    await page.click('[aria-label="Multi-city"]');
    // Click [placeholder="Do"]
    await page.click('[placeholder="Do"]');
    // Fill [placeholder="Do"]
    await page.fill('[placeholder="Do"]', 'vie');
    // Click text=Vientiane (VTE)
    await page.click('text=Vientiane (VTE)');
    // Click input[name="fsc-origin-search-1"]
    await page.click('input[name="fsc-origin-search-1"]');
    // Click input[name="fsc-destination-search-1"]
    await page.click('input[name="fsc-destination-search-1"]');
    // Fill input[name="fsc-destination-search-1"]
    await page.fill('input[name="fsc-destination-search-1"]', 'waw');
    // Click text=Warszawa Chopina (
    await page.click('text=Warszawa Chopina (');
    // Click button:has-text("Wylot")
    await page.click('button:has-text("Wylot")');
    // Click [aria-label="czwartek, 29 kwietnia 2021"]
    await page.click('[aria-label="czwartek, 29 kwietnia 2021"]');
    // Click text=Szukaj
    await page.click('text=Szukaj');
    // ---------------------
    await context.close();
    await browser.close();
})();
