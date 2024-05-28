"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('test', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Alerts', { exact: true }).click();
    await page.locator('#confirmButton').click();
    await (0, test_1.expect)(page.getByText('You selected Ok')).toBeVisible();
});
