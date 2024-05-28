"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/home-page.spec.ts
const test_1 = require("@playwright/test");
const home_page_1 = require("../../pages/front/home-page");
test_1.test.describe('Home Page Tests', () => {
    test_1.test.beforeEach(async ({ page }) => {
        const homePage = new home_page_1.HomePage(page);
        await homePage.navigate();
    });
    (0, test_1.test)('should display correct card titles', async ({ page }) => {
        const homePage = new home_page_1.HomePage(page);
        const cardTitles = await homePage.getCardTitles();
        const expectedTitles = [
            'Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'
        ];
        expectedTitles.forEach(title => {
            (0, test_1.expect)(cardTitles).toContain(title);
        });
    });
    (0, test_1.test)('should navigate to Elements page', async ({ page }) => {
        const homePage = new home_page_1.HomePage(page);
        await homePage.clickElementsCard();
        await (0, test_1.expect)(page).toHaveURL('https://demoqa.com/elements');
    });
});
