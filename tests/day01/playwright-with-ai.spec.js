import { test } from '@playwright/test';

test('', async ({ page }) => {
  // go to https://www.google.com/
  await page.goto('https://www.google.com/');

  //pause the automation for 3 seconds
  await page.waitForTimeout(3000);

  let searchBox=page.locator("//textarea[@id='APjFqb']");

  //enter "Cydeo" in the search box
  await searchBox.fill("Cydeo");
  //pause the automation for 3 seconds
  await page.waitForTimeout(3000);
  
});