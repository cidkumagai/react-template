import type { Linter } from 'eslint';

import { sharedFiles } from './shared';
import { fixupPluginRules } from '@eslint/compat';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export const reactHooksConfig: Linter.Config = {
  name: 'eslint/react-hooks',
  files: sharedFiles,
  plugins: { 'react-hooks': fixupPluginRules(pluginReactHooks) },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
    'react-hooks/rules-of-hooks': 'off',
  },
};
