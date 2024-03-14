import { test, expect } from '@playwright/test';

test('recorded test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div:nth-child(5) > div > .avatar > svg').click();
  await page.getByText('Alerts, Frame & Windows').click();
  await page.getByText('Alerts', { exact: true }).click();
  await page.waitForSelector('#alertButton');
  await page.locator('#alertButton').click();
  await page.locator('#confirmButton').click();
  
  await page.getByText('You entered qatest').click();

  await page.getByText('You selected Ok').click();
  await page.getByText('Widgets').click();
  await page.getByText('Progress Bar').click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByText('%').click();
  await page.getByText('%').dblclick();
  
  await expect(page.getByRole('progressbar')).toContainText('100%');

  await page.getByText('Tabs').click();
  await page.getByRole('tab', { name: 'Origin' }).click();
  await page.getByRole('tab', { name: 'Use' }).click();
  await page.getByText('WhatOriginUseMore').click();
  await page.getByText('WhatOriginUseMore').click();
  await page.getByText('Tool Tips').click();
  await page.getByRole('button', { name: 'Hover me to see' }).click();
  await page.getByPlaceholder('Hover me to see').click();
  await page.getByPlaceholder('Hover me to see').fill('test qa');
  await page.getByPlaceholder('Hover me to see').press('Enter');
  await page.locator('li').filter({ hasText: /^Menu$/ }).click();
  await page.getByText('Accordian').click();
  await page.getByText('Where does it come from?').click();
  await page.getByText('Why do we use it?').click();
  
  await expect(page.getByText('It is a long established fact')).toBeVisible();
});