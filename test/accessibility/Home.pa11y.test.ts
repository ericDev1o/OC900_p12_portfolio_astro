import pa11y from 'pa11y';
import htmlReporter from 'pa11y-reporter-html';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import type { ChildProcess } from 'node:child_process';

import { startAstroServer, stopAstroServer } from '@test/helpers/serverHelper';

describe('Home page accessibility test', () => {
    let serverProcess: ChildProcess;

    const PORT = 4321;
    const WAIT_SERVER_MS = 4000;
    const WAIT_TEST_MS = 30000;

    async function runPa11y(port: number = PORT) {
        return pa11y(`http://localhost:${port}/`);
    }

    beforeAll(async () => {
        // Arrange
        serverProcess = await startAstroServer(PORT, WAIT_SERVER_MS);
    })
    afterAll(() => {
         stopAstroServer(serverProcess);
    });

    it('should have no axe accessibility violations', async () => {
        // Act
        const results = await runPa11y(PORT);
        // Assert
        expect(results.issues.length).toBe(0);
    }, WAIT_TEST_MS);
    it('should generate pa11y report locally', async () => {
        // Arrange
        const results = await runPa11y(PORT);
        const html = await htmlReporter.results(results);

        const reportDir = path.resolve(process.cwd(), 'reports');
        if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
        }
        // Act
        await writeFile(path.resolve(reportDir, 'pa11y-report.html'), html, 'utf-8');
    }, WAIT_TEST_MS);
});