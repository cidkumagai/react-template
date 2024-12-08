import type { Linter } from 'eslint';

import { sharedFiles } from './shared';
import pluginReact from 'eslint-plugin-react';

export const reactConfig: Linter.Config = {
  name: 'eslint/react',
  files: sharedFiles,
  plugins: { react: pluginReact },
  settings: { react: { version: 'detect' } },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
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
