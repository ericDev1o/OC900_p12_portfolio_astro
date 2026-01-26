import 'vitest/config';

import { getViteConfig } from 'astro/config';
//import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

//export default defineConfig({
export default getViteConfig({
    plugins: [react()],
    test: {
        globals: true,
        setupFiles: './vitest-setup.ts',
        include:[
        'test/accessibility/**/*.pa11y.test.ts',
        'test/accessibility/unit/**/*.a11y.test.tsx'
        ],
        exclude:[
            'test/integration/**/*.integration.test.ts'
        ],
        /* implicit default */
        environment: 'node'
        }
});