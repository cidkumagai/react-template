import { plugin } from "typescript-eslint";

import { sharedFiles } from "./shared";

import type { TSESLint } from "@typescript-eslint/utils";

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  name: "typescript/base",
  files: sharedFiles,
  plugins: {
    "@typescript-eslint": plugin,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
  },
};
