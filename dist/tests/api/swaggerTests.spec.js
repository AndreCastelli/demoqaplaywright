"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('swagger is online', async ({ page }) => {
    await page.goto('https://demoqa.com/swagger/');
    await (0, test_1.expect)(page.getByRole('heading', { name: 'Book Store API' })).toBeVisible;
});
