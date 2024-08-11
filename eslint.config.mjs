import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import pluginVitest from 'eslint-plugin-vitest';
import { config as tseslintConfigs } from 'typescript-eslint';

import { baseConfig } from './eslint/base.mjs';
import { importConfigArray } from './eslint/import.mjs';
import { languageOptionFactory } from './eslint/language-options.mjs';
import { prettierConfig } from './eslint/prettier.mjs';
import { reactHooksConfig } from './eslint/react-hooks.mjs';
import { reactConfig } from './eslint/react.mjs';
import { testingLibraryConfig } from './eslint/testing-library.mjs';
import { typescriptConfig } from './eslint/typescript.mjs';
import { vitestConfig } from './eslint/vitest.mjs';

/** @typedef {import("typescript-eslint").ConfigWithExtends} ESLintConfig */

/** @type {Pick<ESLintConfig, "name" | "ignores">} */
const ignoresConfig = {
  name: 'eslint/ignores/base',
  ignores: [
    '**/dist',
    '**/node_modules',
    '**/pnpm-lock.yaml',
    '**/coverage',
    '**/storybook-static',
    '**/.storybook',
  ],
};

const tsconfigJsonFilePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  './tsconfig.json'
);

/** @type {Pick<ESLintConfig, "name" | "languageOptions">} */
const languageOptionConfig = languageOptionFactory(tsconfigJsonFilePath);

export default tseslintConfigs(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  typescriptConfig,
  ...importConfigArray,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
  {
    name: 'vitest/setup-tests',
    files: ['./setup-test.ts'],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      'vitest/prefer-spy-on': 'off',
    },
  },
  testingLibraryConfig,
  prettierConfig
);
