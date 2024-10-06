import { test, chromium, firefox } from '@playwright/test';

test('Creating multiple contexts', async ({ browser }) => {

    let context1 = await browser.newContext();

    let page1 = await context1.newPage();

    await page1.goto("https://www.google.com/");

    let page2 = await context1.newPage();

    await page2.goto("https://www.youtube.com/");

    await page2.waitForTimeout(3000);


    let context2 = await browser.newContext();

    let page3 = await context2.newPage();

    await page3.goto("https://cydeo.com/");

    let page4 = await context2.newPage();

    await page4.goto("https://www.linkedin.com/");

    await page4.waitForTimeout(3000);

/*
    let firefoxBrowser = await firefox.launch();
    let firefoxContext = await firefoxBrowser.newContext();
    let page5 = await firefoxContext.newPage();
    await page5.goto("https://cydeo.com/");

    await page4.waitForTimeout(3000);
*/
});



test('', async () => {
 
    let chromeBrowser = await chromium.launch();
    let chromeContext = await chromeBrowser.newContext();
    let page1 = await chromeContext.newPage();
    await page1.goto("https://www.google.com/");
    let page2 = await chromeContext.newPage();
    await page2.goto("https://www.youtube.com/");

    await page2.waitForTimeout(3000);

    let firefoxBrowser = await firefox.launch();
    let firefoxContext = await firefoxBrowser.newContext();
    let page3 = await firefoxContext.newPage();
    await page3.goto("https://cydeo.com/");

    await page3.waitForTimeout(3000);

});