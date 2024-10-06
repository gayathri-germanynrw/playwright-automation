import { expect, test } from '@playwright/test';
import path from 'path';
import fs from "fs";

test('File Download Practice', async ({ page }) => {

    // navigate to https://practice.cydeo.com/download
    await page.goto("https://practice.cydeo.com/download");

    // create event listener for download
    let promisedDwonload = page.waitForEvent("download");

    // click the file to download
    await page.locator("text='SShot.png'").click();

    // getting the download object by resolving the promise
    let download = await promisedDwonload;

    // created path where the file needs to be saed at
    let downloadPath = path.join(__dirname, 'download', download.suggestedFilename());

    // save the downloaded file at the specified path
    await download.saveAs(downloadPath);

    // verified that the file exist
    expect(fs.existsSync(downloadPath)).toBeTruthy();
  
});

test('File Upload Practice', async ({ page }) => {
    
    // navigate to https://practice.cydeo.com/upload
    await page.goto("https://practice.cydeo.com/upload");

    // select the file path
    let filePath = path.join(__dirname, "upload", "Class Notes.txt");

    await page.waitForTimeout(3000);

    // Choose file step using the input file selector and the specified file path
    await page.setInputFiles("//input[@id='file-upload']" , filePath );

    await page.waitForTimeout(3000);

    // Upload the selected file by clicking the upload button
    await page.click("//input[@id='file-submit']");

    await page.waitForTimeout(3000);

    // Verify that the file upload was successful by checking the visibility of the success message
    await expect(page.locator("text='File Uploaded!'")).toBeVisible();

});