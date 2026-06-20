import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // This app is client-side only (no SSR/RSC), so synchronous
      // setState in an effect for client feature-detection (matchMedia)
      // and small typing/particle state machines is the correct,
      // standard pattern here rather than a bug to eliminate.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
])
