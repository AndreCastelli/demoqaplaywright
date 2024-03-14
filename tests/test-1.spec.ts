import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
  await page.getByText('Alerts', { exact: true }).click();
  await page.locator('#confirmButton').click();
  await expect(page.getByText('You selected Ok')).toBeVisible();
});