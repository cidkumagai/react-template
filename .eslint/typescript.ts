import { plugin } from 'typescript-eslint';

import { sharedFiles } from './shared';

import type { TSESLint } from '@typescript-eslint/utils';

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  name: 'eslint/typescript',
  files: sharedFiles,
  plugins: {
    '@typescript-eslint': plugin,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
