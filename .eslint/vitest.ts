import type { Linter } from 'eslint';

import { sharedTestFiles } from './shared';
import { fixupPluginRules } from '@eslint/compat';
import pluginVitest from '@vitest/eslint-plugin';

export const vitestConfig: Linter.Config = {
  name: 'vitest/base',
  files: sharedTestFiles,
  plugins: {
    vitest: fixupPluginRules(pluginVitest),
  },
  rules: {
    ...pluginVitest.configs.recommended.rules,
    'vitest/consistent-test-it': [
      'error',
      {
        fn: 'test',
      },
    ],
    'vitest/expect-expect': 'off',
    'vitest/no-alias-methods': 'error',
    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'error',
    'vitest/no-conditional-tests': 'error',
    'vitest/prefer-comparison-matcher': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/no-standalone-expect': 'error',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-focused-tests': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/prefer-called-with': 'error',
    'vitest/prefer-each': 'error',
    'vitest/prefer-expect-resolves': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-mock-promise-shorthand': 'error',
    'vitest/prefer-spy-on': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-be-falsy': 'error',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-be-truthy': 'error',
    'vitest/prefer-to-contain': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/require-hook': 'error',
    'vitest/require-to-throw-message': 'error',
    'vitest/require-top-level-describe': 'error',
    'vitest/valid-expect': [
      'error',
      {
        alwaysAwait: true,
      },
    ],
  },
};
