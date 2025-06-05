import { test, expect } from '@playwright/test';

test('Buscar clima de una ciudad en OpenWeatherMap', async ({ page }) => {
  await page.goto('/');

  const cookieBanner = page.locator('#stick-footer-panel');
  if (await cookieBanner.isVisible()) {
    await page.locator('#stick-footer-panel .stick-footer-panel__close').click();
  }

  await page.locator('input[placeholder="Search city"]').click();
  await page.locator('input[placeholder="Search city"]').fill('London');
  await page.locator('button:has-text("Search")').click();

  await page.locator('.search-dropdown-menu li >> text=London, GB').click();

  const result = page.locator('div.current-container h2');
  await expect(result).toContainText('London');
});