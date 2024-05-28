// pages/HomePage.ts
import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/');
  }

  async getCardTitles() {
    return this.page.$$eval('.card-body', elements => elements.map(el => el.textContent));
  }

  async clickElementsCard() {
    await this.page.getByText('Elements').click();
  }
}
