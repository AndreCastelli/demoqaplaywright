import { test, expect } from '@playwright/test';

const URL = 'https://demoqa.com/';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto(URL);
  console.log(`Running ${testInfo.title}`);
});

test.afterEach( async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status != testInfo.expectedStatus)
  console.log('Did not run as expected, ended up at ${page.url()}');
});

test.describe('@positive - Validate HomePage', () => {
  test('url ok', async ({ page }) => {
    await expect(page).toHaveURL('https://demoqa.com');
  });

  test('body card', async ({ page }) => {
    const cardBodyElements = await page.$$('.card-body');
    const expectedTexts = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
  
    for (const [index, expectedText] of expectedTexts.entries()) {
      const actualText = await cardBodyElements[index].textContent();
      expect(actualText).toContain(expectedText);
    }
  });
  
  test('elements ok', async ({ page }) => {
    await page.getByText('Elements').click();
    await expect(page.getByText('Elements')).toBeVisible();
  });
});