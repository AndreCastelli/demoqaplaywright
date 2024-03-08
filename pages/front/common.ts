import { Page } from '@playwright/test';

export async function clickByText(page: Page, texto: string): Promise<void> {
    const xpath = `//span[text()='${texto}']`;
  
    await page.waitForSelector(xpath, { state: 'visible' });
    await page.click(xpath);
  }

  export async function fillFieldByText(page: Page, text: string, value: string): Promise<void> {
    const xpath = `//input[@placeholder='${text}' or @aria-label='${text}' or @name='${text}']`;

    await page.waitForSelector(xpath, { state: 'visible' });

    await page.fill(xpath, value);
  }
