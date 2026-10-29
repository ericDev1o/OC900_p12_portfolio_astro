import { defineConfig } from '@playwright/test';

import { type EnvMode, envs } from './test/performance/configEnv';

const PORT = 4321;

const isProd = process.env.TEST_ENV === 'prod';

const mode: EnvMode = isProd ? 'prod' : 'local';

const BASE_URL = envs[mode].baseURL;

export default defineConfig({
  use: {
    baseURL: BASE_URL,
  },

  webServer: isProd
    ? undefined
    : {
        command: `pnpm preview --port ${PORT}`,
        url: BASE_URL,
        reuseExistingServer: true,
      },
});
