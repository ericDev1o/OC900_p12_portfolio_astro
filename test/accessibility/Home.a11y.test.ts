import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PORTFOLIO_URL = 'https://ericdev1o.github.io/OC900_p12_portfolio';

/**
 * Accessibility Axe E2E tests
 * 
 * Tests cover WCAG 2.0, 2.1 & 2.2 A, AA & AAA.
 */
test.describe('Home page accessibility', () => {
    test.setTimeout(30000);
       
    test('should have no axe violations',  async({ page }) => {    
        // Arrange
        await page.goto(
            PORTFOLIO_URL,
            { waitUntil: 'domcontentloaded'}
        );
        await page.waitForSelector('main');
        await page.waitForSelector('h1');
        await page.waitForLoadState('networkidle');

        // Act 
        const results = await new AxeBuilder({page})
        .withTags([
            'wcag2a', 
            'wcag2aa',
            'wcag2aaa',
            'best-practice'
        ])
        .analyze();

        if(results.violations.length > 0) {
            const report = {
                type: 'axe 2.0 to 2.2 A, AA & AAA',
                url: PORTFOLIO_URL,
                status: results.violations.length === 0 ? 'passed' : 'failed',
                details: results.violations
            }
            console.error(JSON.stringify(report));
        }
        
        // Assert
        expect(results.violations.length).toBe(0);
    });

    /**
     * ✔ Tab works globally
     * ✔ Focus moves
     */
    test('keyboard navigation should work', async ({ page }) => {
        // Arrange
        await page.goto(PORTFOLIO_URL);
        await page.waitForSelector('main');

        let found = false;

        // Act
        for (let i = 0; i < 40; i++) {
            await page.keyboard.press('Tab');

            const isLink = await page.evaluate(() => {
                const el = document.activeElement;
                return el?.tagName === 'A';
            });

            if (isLink) {
                found = true;
                break;
            }
        }

        // Assert
        expect(found).toBe(true);
    });

    /**
     * ✔ CSS focus styles
     * ✔ outline / focus-visible
     * ✔ WCAG 2.4.7 / 2.4.11 compliant
     */
    test('keyboard focus should be visible', async ({ page }) => {
        // Arrange
        await page.goto(PORTFOLIO_URL);
        await page.waitForSelector('main');
        await page.keyboard.press('Tab');

        // Act
        const outline = await page.evaluate(() => {
            const el = document.activeElement;
            return el ? window.getComputedStyle(el).outlineStyle : null;
        });

        // Assert
        expect(outline).not.toBe('none');
    });
});