import { test } from '@playwright/test';

test.describe('Google Test', () => {
    test('Search by Facebook', async ({ page }) => {
        await page.goto('https://www.google.com/');
        await page.getByLabel('Search', { exact: true }).click();
        await page.getByLabel('Search', { exact: true }).fill('facebook');
        await page.getByLabel('Search', { exact: true }).press('Enter');
    });
    test('Search by Instagram', async ({ page }) => {
        await page.goto('https://www.google.com/');
        await page.getByLabel('Search', { exact: true }).click();
        await page.getByLabel('Search', { exact: true }).fill('Instagram');
        await page.getByLabel('Search', { exact: true }).press('Enter');
    });
});
