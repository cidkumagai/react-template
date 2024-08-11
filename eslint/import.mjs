import { fixupPluginRules } from '@eslint/compat';
import pluginImport from 'eslint-plugin-import';
import pluginImportReplace from 'eslint-plugin-import-replace';

/** @type {Pick<ESLintConfig, "name" | "files" | "plugins" | "rules" | "settings">[]} */
const importConfigArray = [
  {
    name: 'import/base',
    files: [
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.cts',
      '**/*.mts',
      '**/*.tsx',
      '**/*.d.ts',
    ],
    plugins: {
      import: fixupPluginRules(pluginImport),
      'import-replace': pluginImportReplace,
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx',
          '.ts',
          '.cts',
          '.mts',
          '.tsx',
          '.d.ts',
        ],
      },
    },
  },
  {
    name: 'import/disabled-in-typescript',
    files: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx', '**/*.d.ts'],
  },
];

export { importConfigArray };
