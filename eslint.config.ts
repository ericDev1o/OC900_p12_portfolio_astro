import type { Linter } from 'eslint';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * ESLint flat config
 * 
 * Features:
 *  -> TypeScript support via @typescript-eslint
 *  -> React Hooks best practices enforcement
 *  -> Vite & React refresh support
 *  -> Prettier integration 
 *     -> last, 
 *     -> to override style rules
 *     -> to preserve 
 *         -> React Hooks
 *         -> TypeScript
 *         -> safety
 *     rules
 */
export default defineConfig([
  globalIgnores(
    [
    'dist',
    '.astro'
    ]
  ),
  ...astro.configs.recommended,
  {
    ...jsxA11y.flatConfigs.strict,

    files: ['**/*.{ts,tsx}'],
   
    plugins: {
      ...jsxA11y.flatConfigs.strict.plugins,
      '@typescript-eslint': tseslint
    },
    
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    },

    rules: {
      ...jsxA11y.flatConfigs.strict.rules,

      ...tseslint.configs.recommended.rules,

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', 
        { 
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],

      'quotes': ['error', 'single', {'avoidEscape': true}]
    }
  },
  prettier
 ] satisfies Linter.Config[]
);
