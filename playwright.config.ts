import { defineConfig } from '@playwright/test';

export default defineConfig({
    webServer: {
    command: 'yarn preview --port 4321',
    port: 4321,
    reuseExistingServer: !process.env.CI,
    }
});