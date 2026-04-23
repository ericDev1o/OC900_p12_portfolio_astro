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
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      let clsValue = 0;
      let lcpValue: number | null = null;

      let lastChange = Date.now();

      const MAX_DURATION = 8000;
      const IDLE_TIME = 1000;

      const start = Date.now();

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const ls = entry as LayoutShift;
            
            if(!ls.hadRecentInput) 
              clsValue += ls.value;
              lastChange = Date.now();
          }

          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry as LargestContentfulPaint;
            lcpValue = lcp.startTime;
            lastChange = Date.now();
          }
        }
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      observer.observe({ type: 'layout-shift', buffered: true });

      const interval = setInterval(() => {
        const now = Date.now();

        const isIdle = now - lastChange > IDLE_TIME;
        const isTimeOut = now - start > MAX_DURATION;

        if(isIdle || isTimeOut) {
          clearTimeout(interval);
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
      }, 100);
    });
  });
}