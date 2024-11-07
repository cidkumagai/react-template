import { sharedFiles } from './shared';

import type { Linter } from 'eslint';

export const baseConfig: Linter.Config = {
  name: 'eslint/base',
  files: sharedFiles,
  rules: {
    'no-var': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
