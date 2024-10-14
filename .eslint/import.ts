import { fixupPluginRules } from "@eslint/compat";
import { flatConfigs } from "eslint-plugin-import";
import pluginUnusedImports from "eslint-plugin-unused-imports";

import { sharedFiles } from "./shared";

import type { Linter } from "eslint";

export const importConfigArray: Linter.Config[] = [
  {
    name: "eslint/import/order",
    files: sharedFiles,
    plugins: {
      import: fixupPluginRules(flatConfigs.recommended.plugins.import),
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      ...flatConfigs.recommended.rules,
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "import/named": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": sharedFiles,
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
];
