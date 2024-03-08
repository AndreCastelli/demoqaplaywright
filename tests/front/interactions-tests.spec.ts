import { test, expect } from '@playwright/test';
import { InteractionsPage } from '../../pages/front/interactions-page';

const URL = 'https://demoqa.com/interaction';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto(URL);
  console.log(`Running ${testInfo.title}`);
});

test.afterEach( async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status != testInfo.expectedStatus)
  console.log('Did not run as expected, ended up at ${page.url()}');
});

test('Sortable element', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
    await interactionsPage.clickSortable();
  
    await page.waitForSelector('.ui-sortable-handle');
  
    const oneElement = await page.$('//div[text()="One"]');
    const twoElement = await page.$('//div[text()="Two"]');
    const threeElement = await page.$('//div[text()="Three"]');
  
    if (!oneElement || !twoElement || !threeElement) {
      throw new Error('Element not found.');
    }
  
    const initialPositions = await Promise.all([
      oneElement.boundingBox(),
      twoElement.boundingBox(),
      threeElement.boundingBox(),
    ]);

    if (initialPositions.some((position) => position === null || position === undefined)) {
      throw new Error('It was not possible to obtain all the initial positions of the elements.');
    }
  
    if (initialPositions[0] && initialPositions[1] && initialPositions[2]) {
      await page.mouse.move(initialPositions[0]!.x + 5, initialPositions[0]!.y + 5);
      await page.mouse.down();
      await page.mouse.move(initialPositions[1]!.x + 5, initialPositions[1]!.y + 5);
      await page.mouse.move(initialPositions[2]!.x + 5, initialPositions[2]!.y + 5);
      await page.mouse.up();
    }
  
    const finalPositions = await Promise.all([
      oneElement.boundingBox(),
      twoElement.boundingBox(),
      threeElement.boundingBox(),
    ]);
  
    if (finalPositions.some((position) => position === null || position === undefined)) {
      throw new Error('It was not possible to obtain all the final positions of the elements.');
    }
  
    expect(finalPositions[0]!.x > initialPositions[1]!.x).toBe(true);
    expect(finalPositions[0]!.x < initialPositions[2]!.x).toBe(true);
  });


test('Drag and Drop', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
    await interactionsPage.clickDroppable();
  
    await page.waitForSelector('#draggable');
    await page.waitForSelector('#droppable');
  
    const draggableElement = await page.$('#draggable');
    const droppableElement = await page.$('#droppable');
  
    if (!draggableElement || !droppableElement) {
      throw new Error('Elementos não foram encontrados.');
    }
  
    const initialDraggablePosition = await draggableElement.boundingBox();
    const initialDroppablePosition = await droppableElement.boundingBox();

    if (!initialDraggablePosition || !initialDroppablePosition) {
        throw new Error('It was not possible to obtain all the initial positions of the elements.');
      }
  
    await page.mouse.move(initialDraggablePosition.x + 5, initialDraggablePosition.y + 5);
    await page.mouse.down();
    await page.mouse.move(initialDroppablePosition.x + 5, initialDroppablePosition.y + 5);
    await page.mouse.up();
  
    await droppableElement.waitForSelector('p:has-text("Dropped!")');
  
  });