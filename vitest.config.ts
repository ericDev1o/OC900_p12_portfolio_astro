import 'vitest/config';

import { getViteConfig } from 'astro/config';

import react from '@vitejs/plugin-react';

export default getViteConfig({
    plugins: [react()],
    test: {
        globals: true,
        setupFiles: './vitest-setup.ts',
        include:[
        'test/accessibility/**/*.pa11y.test.ts'
        ],
        exclude:[
            'test/integration/**/*.integration.test.ts'
        ],
        /* default */
        environment: 'node'
        }
});