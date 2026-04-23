import { test } from '@playwright/test';

import { collectVitals } from './helpers/collectWebVitals';
import { preparePage } from './helpers/preparePage';
import { assertVitals } from './helpers/assertVitals';
import { 
  envs, 
  type EnvMode 
} from '@test/performance/configEnv';
import { $brand } from 'astro:schema';

(['local', 'prod'] as EnvMode[]).forEach((envMode) => {
  test(`Web Vitals performance - ${envMode}`, async ({ page }) => {
    test.setTimeout(60000);
    
    const baseURL = envs[envMode].baseURL;

    await preparePage(page, baseURL);

    const vitals = await collectVitals(page);

    const { FCP, LCP, TTFB, CLS } = vitals;

    if (
      FCP === null ||
      LCP === null ||
      TTFB === null
    ) {
      throw new Error(`Incomplete vitals: ${JSON.stringify(vitals)}`);
    }

    test.info().attach(`Vitals-${envMode}.json`, {
      body: JSON.stringify(vitals, null, 2),
      contentType: 'application/json'
    });

    console.log(`
      [${envMode}] Vitals:
      FCP = ${vitals.FCP} ms,
      LCP = ${vitals.LCP} ms,
      TTFB = ${vitals.TTFB} ms,
      CLS = ${Number.isFinite(vitals.CLS) ? vitals.CLS.toFixed(3) : 'NaN'}
    `);

    assertVitals(vitals);
  });
});