import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {Pick<ESLintConfig, "name" | "files" | "plugins" | "rules">} */
const prettierConfig = {
  name: 'prettier/base',
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
  rules: {
    ...eslintConfigPrettier.rules,
    curly: 'off',
    'no-unexpected-multiline': 'off',
  },
};

export { prettierConfig };
