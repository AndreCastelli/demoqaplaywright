import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demoqa/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Elements' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Elements' })).toBeVisible();
});
