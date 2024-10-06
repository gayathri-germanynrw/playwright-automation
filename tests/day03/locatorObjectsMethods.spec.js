import { test,expect } from '@playwright/test';

test.describe('Test Group', () => {
    //create a beforeEach
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });
  test('getAttribute() retrives the attribute valiue', async ({ page }) => {
    console.log(await page.locator("text='A/B Testing'").getAttribute("href"));

    console.log(await page.locator("text='Home'").getAttribute("class"));
  });


  test('state method of locator', async ({ page }) => {
    let testAutomationPractice=page.locator("//span[@class='h1y']");

   console.log(await testAutomationPractice.isVisible());
   expect(await testAutomationPractice.isVisible() ).toBeTruthy(); // Verifies that element is Visible
        // anither way to acheive that element is Visible 
        // By paaing the Element
   await expect(testAutomationPractice).toBeVisible();// Verifies that element is Visible
   console.log("_____________________________________");

   let autoComplete=page.locator("text='Autocomplete'");

   console.log(await autoComplete.isEnabled());

    expect(await autoComplete.isEnabled()).toBeTruthy(); // verifies that the element is enabled

    await expect(autoComplete).toBeEnabled(); // verifies that the element is enabled

    console.log("------isChecked ----");

    await page.locator("text='Checkboxes'").click();
    let checkBox1 = page.locator("//input[@type='checkbox' and @id='box1']");
    let checkBox2 = page.locator("//input[@type='checkbox' and @id='box2']");

    //Verify the checkbox1 is unchecked by default
    expect(await checkBox1.isChecked()).toBeFalsy();
    // By passing Web Element as another way of checking the checkbox is not selected
   await expect(checkBox1).not.toBeChecked(); // Preferrable by Tutor Muhtar also

    //Verify the checkbox2 is checked by default
    expect (await checkBox2.isChecked()).toBeTruthy();

    // By passing Web Element as another way of checking the checkbox is selected
   await expect(checkBox2).toBeChecked();

  });
  
});