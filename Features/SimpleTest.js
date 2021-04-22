const {chromium} = require('playwright');

(async () => {
    //inside the block
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext({
        viewport: {
            width: 1920,
            height: 1080,
        },
        ignoreHTTPSErrors: true
    })
    const page = await context.newPage();
    //GO to page
    await page.goto("http://automationpractice.com/index.php");
    // Focus on element to get dropdown menu
    await page.focus('a[title="Women"]')
    //click on a Element
    await page.click('text=Casual Dresses');

    //click on quick view
    await page.click('img[title="Printed Dress"]');
    //Double the quantity
    await page.click('i[class="icon-plus"]');
    await page.screenshot({path: 'ea.png'});

    await browser.close();
})();
