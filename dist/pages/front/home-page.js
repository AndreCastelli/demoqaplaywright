"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const common_1 = require("../front/common");
class HomePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async clickSortable() {
        await (0, common_1.clickByText)(this.page, 'Sortable');
        await this.page.waitForTimeout(2000);
    }
}
exports.HomePage = HomePage;
exports.default = HomePage;
