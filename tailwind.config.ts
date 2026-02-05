import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    flowbitePlugin
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