import type { TSESLint } from '@typescript-eslint/utils';

import { sharedFiles } from './shared';
import globals from 'globals';
import { parser } from 'typescript-eslint';

export const languageOptionFactory = (
  tsConfigPath: string,
): TSESLint.FlatConfig.Config => ({
  name: 'eslint/language-options',
  files: [...sharedFiles],
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 10,
      sourceType: 'module',
      project: tsConfigPath,
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2015,
    },
  },
});
