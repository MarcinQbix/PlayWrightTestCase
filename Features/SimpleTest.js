const {chromium}=require('playwright');

(async()=>{
    //inside the block
    const browser = await chromium.launch({
        headless:false
    });
    const context= await browser.newContext({
        viewport: {
            width: 1920,
            height: 1080,
        },
        ignoreHTTPSErrors:true
    })
    const page = context.newPage();
    (await page).goto("https://www.phptravels.net/home");
   // await page.goto("https://www.phptravels.net/home");

    //Email user@phptravels.com
    // Password demouser
    (await page).click('//*[@id="dropdownCurrency"]');
    (await page).click('//*[@id="//header-waypoint-sticky"]/div[1]/div/div/div[2]/div/ul/li[3]/div/div/div/a[1]')
    await (await page).screenshot({path:'ea.png'});

    await browser.close();
})();
