// @vitest-environment jsdom

import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';

import AnimatedDetails from '../../../src/components/UI/AnimatedDetails';

describe('AnimatedDetails custom accordion component', () => {
    it('should have no axe accessibility violations', async () => {
        // Arrange
        const { container } = render
        (
            <AnimatedDetails summary='Découvrez ce projet'>
                <h6>test title</h6>
                <p> test paragraph</p>
            </AnimatedDetails>
        );
        // Act
        const results = await axe(container);
        // Assert
        expect(results).toHaveNoViolations();
    })
});