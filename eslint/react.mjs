import pluginReact from 'eslint-plugin-react';

/** @type {Pick<import("eslint-plugin-react").Config, "name" | "files" | "plugins" | "rules" | "settings">} */
const reactConfig = {
  name: 'react/base',
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
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};

export { reactConfig };
