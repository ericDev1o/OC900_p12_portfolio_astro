import { test } from '@playwright/test';

import { 
  type Vitals,
  collectVitals
} from './helpers/collectWebVitals';
import { preparePage } from './helpers/preparePage';
import { assertVitals } from './helpers/assertVitals';
import { 
  type EnvMode, 
  envs
} from '@test/performance/configEnv';
import { 
  isCompleteVitals, 
  averageVitals
} from './helpers/averageVitals';

for (const envMode of ['local', 'prod'] as EnvMode[]) {
  test(`Web Vitals performance - ${envMode}`, async ({ page }) => {
    test.setTimeout(60000);
    
    const baseURL = envs[envMode].baseURL;

    const NUMBER_OF_RUNS = 3;
    const runs: Vitals[] = [];

    for(let i = 0; i < NUMBER_OF_RUNS; i++) {
      await preparePage(page, baseURL);

      const vitals = await collectVitals(page);

      const { FCP, LCP, TTFB } = vitals;

      if (
        FCP === null ||
        LCP === null ||
        TTFB === null
      ) {
        throw new Error(`Incomplete vitals: ${JSON.stringify(vitals)}`);
      }

      runs.push(vitals);
    }

    const completeRuns = runs.filter(isCompleteVitals);
    if (completeRuns.length === 0)
      throw new Error('No valid vitals to average');
    if(completeRuns.length !== runs.length)
      throw new Error('Some vitals are incomplete.');

    const avg = averageVitals(completeRuns);

    test.info().attach(`Vitals-${envMode}.json`, {
      body: JSON.stringify({ runs, average: avg}, null, 2),
      contentType: 'application/json'
    });

    console.log(`
      [${envMode}] Averaged vitals (${NUMBER_OF_RUNS} runs):
      FCP = ${Number.isFinite(avg.FCP) ? avg.FCP?.toFixed(0) : 'NaN'} ms,
      LCP = ${Number.isFinite(avg.LCP) ? avg.LCP?.toFixed(0) : 'NaN'} ms,
      TTFB = ${Number.isFinite(avg.TTFB) ? avg.TTFB?.toFixed(1) : 'NaN'} ms,
      CLS = ${Number.isFinite(avg.CLS) ? avg.CLS.toFixed(3) : 'NaN'}
    `);

    assertVitals(avg);
  });
};