//const {test} =require('@playwright/test');
import {test} from '@playwright/test';

test('Test Description', async ({page})=> {
   await page.goto('https://www.google.com/');

   await page.waitForTimeout(3000);

   let searchBox=page.locator("//textarea[@id='APjFqb']");
    await searchBox.fill("Playwright Automation");
   //await searchBox.type("Playwright Automation");
   await page.waitForTimeout(3000);



});
/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Suche" value="" jsaction="paste:puy29d;" aria-label="Suche" aria-autocomplete="both" aria-expanded="true" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwiTzJTLv7-IAxXUhv0HHUt_LpMQ39UDCAY" aria-activedescendant="" style=""></textarea>


*/
//textarea[@id='APjFqb']