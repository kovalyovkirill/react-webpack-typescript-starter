// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import hooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default tseslint.config(eslint.configs.recommended, {
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.json',
    },
    globals: {
      ...globals.browser,
      ...globals.jest,
      ...globals.node,
      ...globals.commonjs,
    },
  },
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'react-hooks': hooks,
    react,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
  },
});
