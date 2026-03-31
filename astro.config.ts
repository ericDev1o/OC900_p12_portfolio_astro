// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ericdev1o.github.io',
  base: '/OC900_p12_portfolio_astro/',

  build: {
    assets: 'assets'
  },

  markdown: {
    syntaxHighlight: false
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