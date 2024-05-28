import { test, expect } from '@playwright/test';
import { InteractionsPage } from '../../pages/front/interactions-page';

const URL = 'https://demoqa.com/interaction';

test.beforeEach(async ({ page }) => {
  const interactionsPage = new InteractionsPage(page);
  await interactionsPage.navigate(URL);
});

test.describe('@positive - Validate Interactions', () => {
  test('Sortable element', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
    await interactionsPage.clickSortable();
    await interactionsPage.waitForNewElement();
    await interactionsPage.waitForTextCenterVisible();
  });

  test('Drag and Drop', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
    const scroll = await page.locator('text=Droppable');
    await scroll.scrollIntoViewIfNeeded();
    await interactionsPage.clickDroppable();
    /*  await page.waitForSelector('#draggable');
     await page.waitForSelector('#droppable');
     await interactionsPage.dragAndDrop('#draggable', '#droppable');
     await expect(page.locator('#droppable p')).toHaveText('Dropped!'); */

    const draggable = await page.locator('#draggable');
    const droppable = await page.locator('#droppable');

    if (!draggable || !droppable) {
      throw new Error('Elementos draggable ou droppable não encontrados.');
    }

    await draggable.scrollIntoViewIfNeeded();
    const draggablee = await page.locator('#draggable');
    const droppablee = await page.locator('.simple-drop-container #droppable');

    const draggableBox = await draggablee.boundingBox();
    const droppableBox = await droppablee.boundingBox();

    if (!draggableBox || !droppableBox) {
      throw new Error('Não foi possível obter a caixa delimitadora dos elementos draggable ou droppable.');
    }

    const source = {
      x: draggableBox.x + draggableBox.width / 2,
      y: draggableBox.y + draggableBox.height / 2
    };
    const target = {
      x: droppableBox.x + droppableBox.width / 2,
      y: droppableBox.y + droppableBox.height / 2
    };

    await page.mouse.move(source.x, source.y);
    await page.mouse.down();
    await page.waitForTimeout(100); // Aguarda um curto período de tempo para evitar movimentos muito rápidos
    await page.mouse.move(target.x, target.y);
    await page.waitForTimeout(100); // Aguarda um curto período de tempo antes de soltar o mouse
    await page.mouse.up();

    const droppedText = await droppable.textContent();
    expect(droppedText).toContain('Drag me');

  });
});
