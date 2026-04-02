import { expect } from '@playwright/test';

import type { Vitals } from './collectWebVitals';

export function assertVitals(vitals: Vitals) {
  expect(vitals.FCP).toBeLessThan(1800);
  expect(vitals.LCP).toBeLessThan(2500);
  expect(vitals.TTFB).toBeLessThan(200);

  if (typeof vitals.CLS !== 'number') {
    throw new Error(`CLS missing: ${JSON.stringify(vitals)}`);
  }
  expect(vitals.CLS).toBeLessThan(0.1);
}