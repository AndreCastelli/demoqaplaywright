import { test, expect } from '@playwright/test';

test('swagger is online', async ({ page }) => {
  await page.goto('https://demoqa.com/swagger/');
  await expect(page.getByRole ('heading', {name: 'Book Store API'})).toBeVisible;
});