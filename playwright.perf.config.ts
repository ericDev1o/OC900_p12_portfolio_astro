import { defineConfig } from '@playwright/test';

import { envs, type EnvMode } from './test/performance/configEnv';

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
        command: `yarn preview --port ${PORT}`,
        url: BASE_URL,
        reuseExistingServer: true
    }
});