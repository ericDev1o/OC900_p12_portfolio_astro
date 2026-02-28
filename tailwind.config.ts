import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      spacing: {
        15: '3.75rem',
        22: '5.5rem'
      }
    }
  }
} satisfies Config;