import type { Page } from '@playwright/test';

export type Vitals = {
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
  CLS: number;
};

type LayoutShift = PerformanceEntry & {
  value: number;
  hadRecentInput: boolean;
};

export async function collectVitals(page: Page): Promise<Vitals> {
  return page.evaluate(() => {
    return new Promise<Vitals>((resolve) => {
      let idleTimer: ReturnType<typeof setTimeout>;
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      let clsValue = 0;
      let lcpValue: number | null = null;

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const ls = entry as LayoutShift;
            
            if(!ls.hadRecentInput) 
              clsValue += ls.value;
          }

          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry as LargestContentfulPaint;
            lcpValue = lcp.startTime;
          }
        }

        clearTimeout(idleTimer);
        idleTimer = setTimeout(finish, 1000);
      });

      function finish() {
        observer.disconnect();

        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry | undefined;

        const fcp = fcpEntry?.startTime ?? null;

        const ttfb = nav
          ? Math.round((nav.responseStart - nav.requestStart) * 1000) / 1000
          : null;

        resolve({
          FCP: fcp,
          LCP: lcpValue,
          TTFB: ttfb,
          CLS: clsValue
        });
      }

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      observer.observe({ type: 'layout-shift', buffered: true });

      setTimeout(finish, 5000);
    });
  });
}