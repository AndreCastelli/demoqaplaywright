// tests/home-page.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/front/home-page';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('should display correct card titles', async () => {
    const expectedTitles = [
      'Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'
    ];

    const cardTitles = await homePage.getCardTitles();
    expect(cardTitles.sort()).toEqual(expectedTitles.sort());
  });

  test('should navigate to Elements page', async () => {
    await homePage.clickElementsCard();
    await expect(homePage.page).toHaveURL('https://demoqa.com/elements');
  });
});
