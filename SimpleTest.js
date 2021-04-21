const {chromium}=require('playwright');

(async()=>{
    //inside the block
    const browser = await chromium.launch({
        headless:false
    });
    const page = (await browser).newPage();
    await (await page).goto("https://executeautomation.com");
    await (await page).screenshot({path:'ea.png'});
    await browser.close();
})();
