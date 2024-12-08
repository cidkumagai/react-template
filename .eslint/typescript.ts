import type { TSESLint } from '@typescript-eslint/utils';

import { sharedFiles } from './shared';
import { plugin } from 'typescript-eslint';

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  name: 'typescript/base',
  files: sharedFiles,
  plugins: {
    '@typescript-eslint': plugin,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
};
