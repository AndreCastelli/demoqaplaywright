import {type Page, type Locator} from '@playwright/test';
import { clickByText } from '../front/common';

export class HomePage{
    constructor (private page: Page) {
    }

    async clickSortable(): Promise<void> {
        await clickByText(this.page, 'Sortable');
        await this.page.waitForTimeout(2000); 
      }
}

export default HomePage;