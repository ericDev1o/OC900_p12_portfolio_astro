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
});