// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@tailwindcss/vite';

import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  site: 'https://ericdev1o.github.io',
  base: '/OC900_p12_portfolio_astro/',

  server: {
    port: 4321
  },
  
  build: {
    assets: 'assets'
  },

  markdown: {
    syntaxHighlight: false,
    smartypants: {
      openingQuotes: { double: '« ', single: '‹ ' },
      closingQuotes: { double: ' »', single: ' ›' }
    }
  },

  security: {
    csp: {
      directives: [
        "default-src 'self'",

        "object-src 'none'",
        "base-uri 'none'",

        "frame-src 'none'",
        
        "form-action 'self'",

        "require-trusted-types-for 'script'",

        "worker-src 'none'",
        "manifest-src 'none'",

        "upgrade-insecure-requests"
      ]
    }
  },

  vite: {
    plugins: [
      tsconfigPaths(),
      tailwind()
    ]
  }
});