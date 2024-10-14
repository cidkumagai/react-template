import globals from "globals";
import { parser } from "typescript-eslint";

import { sharedFiles } from "./shared";

import type { TSESLint } from "@typescript-eslint/utils";

export const languageOptionFactory = (
  tsConfigPath: string,
): TSESLint.FlatConfig.Config => ({
  name: "eslint/language-options",
  files: [...sharedFiles],
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 10,
      sourceType: "module",
      project: tsConfigPath,
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2015,
    },
  },
});
