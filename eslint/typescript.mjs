import { plugin as tseslintPlugin } from 'typescript-eslint';

/** @type {Pick<ESLintConfig, "name" | "files" | "plugins" | "rules">} */
const typescriptConfig = {
  name: 'typescript/base',
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
    '@typescript-eslint': tseslintPlugin,
  },
  rules: {
    ...tseslintPlugin.configs.recommended.rules,
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
  },
};

export { typescriptConfig };
