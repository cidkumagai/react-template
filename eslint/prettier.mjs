import pluginReact from 'eslint-plugin-react';

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
  plugins: {
    react: pluginReact,
  },
  rules: {
    curly: 'off',
    'no-unexpected-multiline': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};

export { prettierConfig };
