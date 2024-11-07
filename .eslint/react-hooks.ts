import { fixupPluginRules } from '@eslint/compat';
import pluginReactHooks from 'eslint-plugin-react-hooks';

import { sharedFiles } from './shared';

import type { Linter } from 'eslint';

export const reactHooksConfig: Linter.Config = {
  name: 'eslint/react-hooks',
  files: sharedFiles,
  plugins: { 'react-hooks': fixupPluginRules(pluginReactHooks) },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
    'react-hooks/rules-of-hooks': 'off',
  },
};
