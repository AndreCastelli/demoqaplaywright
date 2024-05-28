import { BasePage } from './base-page';

export class InteractionsPage extends BasePage {
  async clickSortable() {
    await this.page.click('text=Sortable');
  }

  async clickDroppable() {
    await this.page.click('text=Droppable');
  }

  async dragAndDrop(draggableSelector: string, droppableSelector: string) {
    const draggable = await this.page.locator(draggableSelector);
    const droppable = await this.page.locator(droppableSelector);
    await draggable.dragTo(droppable);
  }

  async waitForNewElement() {
    await this.page.waitForSelector('.list-group-item-action', { state: 'visible' });
  }

  async waitForTextCenterVisible() {
    await this.page.waitForSelector('.text-center', { state: 'visible' });
  }
}
