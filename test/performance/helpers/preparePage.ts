import type { Page } from '@playwright/test';

export async function preparePage(
  page: Page, 
  url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  await page.locator('main').waitFor();
  await page.waitForLoadState('networkidle');

  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let total = 0;
      const step = 200;

      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;

        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  });
}
