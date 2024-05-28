"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const interactions_page_1 = require("../../pages/front/interactions-page");
const URL = 'https://demoqa.com/interaction';
test_1.test.beforeEach(async ({ page }) => {
    const interactionsPage = new interactions_page_1.InteractionsPage(page);
    await interactionsPage.navigate(URL);
});
test_1.test.describe('@positive - Validate Interactions', () => {
    (0, test_1.test)('Sortable element', async ({ page }) => {
        const interactionsPage = new interactions_page_1.InteractionsPage(page);
        await interactionsPage.clickSortable();
        await page.waitForSelector('.ui-sortable-handle');
    });
    (0, test_1.test)('Drag and Drop', async ({ page }) => {
        const interactionsPage = new interactions_page_1.InteractionsPage(page);
        await interactionsPage.clickDroppable();
        await page.waitForSelector('#draggable');
        await page.waitForSelector('#droppable');
        await interactionsPage.dragAndDrop('#draggable', '#droppable');
        await (0, test_1.expect)(page.locator('#droppable p')).toHaveText('Dropped!');
    });
});
