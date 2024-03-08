import { Page } from '@playwright/test';
import { clickByText } from '../front/common';

export class InteractionsPage {
  constructor(private page: Page) {}

  async clickSortable(): Promise<void> {
    await clickByText(this.page, 'Sortable');
    await this.page.waitForTimeout(2000);
  }

  async clickDroppable(): Promise<void> {
    await clickByText(this.page, 'Droppable');
    await this.page.waitForTimeout(2000);
  }
}