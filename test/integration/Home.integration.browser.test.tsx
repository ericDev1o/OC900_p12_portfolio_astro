import { test, expect } from '@playwright/test';

import type { ChildProcess } from 'node:child_process';

import { startAstroServer, stopAstroServer } from '@test/helpers/serverHelper';

/**
 * Main titles are all asserted in the same test because 
 *     1. it's the same logical behavior
 *     2. the render is expensive in the browser
 *     3. the fact that if one assertion fails the following don't run is not an issue
 *        because each text is critical and must be displayed
 */
test.describe('Home page', () => {
    let serverProcess: ChildProcess;
    const PORT = 4321;
    const WAIT_MS = 4000;
    const BASE = '/OC900_p12_portfolio_astro/';

    test.beforeAll(async () => {
        // Arrange
        serverProcess = await startAstroServer(PORT, WAIT_MS);
    })
   test.afterAll(() => {
        stopAstroServer(serverProcess);
    });

    test('must render most important content', async ({ page }) => {
        // Arrange
        await page.goto(`http://localhost:${PORT}${BASE}`);
        // Act
        const headings = [
             {
                name: 'Bonjour, je suis Eric',
                level: 1
            },
            {
                name: 'votre intégrateur "web" react en Île-de-France',
                level: 2
            },
            {
                name: 'À propos de moi',
                level: 3
            },
            {
                name: 'compétences',
                level: 3
            },
            {
                name: 'projets',
                level: 3
            },
            {
                name: 'parcours',
                level: 3
            },
            {
                name: 'contact',
                level: 3
            }
        ];
        // Assert
        for (const { name, level } of headings) {
            const heading = page.getByRole('heading', { name, level });
            await expect(heading).toBeVisible();
        }
    });
});