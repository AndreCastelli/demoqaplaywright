"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsPage = void 0;
const base_page_1 = require("./base-page");
class InteractionsPage extends base_page_1.BasePage {
    async clickSortable() {
        await this.page.click('text=Sortable');
    }
    async clickDroppable() {
        await this.page.click('text=Droppable');
    }
    async dragAndDrop(draggableSelector, droppableSelector) {
        const draggable = await this.page.locator(draggableSelector);
        const droppable = await this.page.locator(droppableSelector);
        await draggable.dragTo(droppable);
    }
}
exports.InteractionsPage = InteractionsPage;
