const { test, expect } = require('@playwright/test');

test('Homepage should have title', async ({ page }) => {
  await page.goto('https://www.polestar.com/se');
  await expect(page).toHaveTitle(/Polestar/);
});
