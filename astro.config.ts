// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import paraglide from '@inlang/paraglide-astro';

export default defineConfig({
  site: 'https://ericdev1o.github.io',
  base: '/OC900_p12_portfolio_astro/',
  
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  integrations: [
    react(),
    paraglide({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});