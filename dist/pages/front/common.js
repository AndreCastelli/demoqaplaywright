"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillFieldByText = exports.clickByText = void 0;
async function clickByText(page, texto) {
    const xpath = `//span[text()='${texto}']`;
    await page.waitForSelector(xpath, { state: 'visible' });
    await page.click(xpath);
}
exports.clickByText = clickByText;
async function fillFieldByText(page, text, value) {
    const xpath = `//input[@placeholder='${text}' or @aria-label='${text}' or @name='${text}']`;
    await page.waitForSelector(xpath, { state: 'visible' });
    await page.fill(xpath, value);
}
exports.fillFieldByText = fillFieldByText;
