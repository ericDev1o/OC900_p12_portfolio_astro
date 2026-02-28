// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ericdev1o.github.io',
  base: '/OC900_p12_portfolio_astro/',

  integrations: [
    react(),
    tailwind()
  ],

  build: {
    assets: 'assets'
  }
});