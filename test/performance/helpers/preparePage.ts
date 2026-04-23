import type { Page } from '@playwright/test';

export async function preparePage(
  page: Page, 
  url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  await page.locator('main').waitFor();
  await page.waitForLoadState('networkidle');

  autoScroll(page);
}

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let lastHeight = 0;

      const timer = setInterval(() => {
        const currentHeight = document.body.scrollHeight;

        window.scrollTo(0, currentHeight);

        if (currentHeight === lastHeight) {
          clearInterval(timer);
          resolve();
        }

        lastHeight = currentHeight;
      }, 100);
    });
  });
}
