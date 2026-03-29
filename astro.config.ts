// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ericdev1o.github.io',
  base: '/OC900_p12_portfolio_astro/',

  integrations: [
    tailwind()
  ],

  build: {
    assets: 'assets'
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
  }
});