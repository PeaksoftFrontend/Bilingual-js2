import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: "error",
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^(StrictMode|App)$",
        },
      ],
      "no-console": "warn",
      "prefer-arrow-callback": "error",
      "func-style": ["error", "expression"],
      "no-alert": "error",
      "no-shadow": "error",
      "react/jsx-props-no-spreading": [
        "off",
        {
          html: "ignore",
          custom: "ignore",
        },
      ],
      "react-hooks/exhaustive-deps": [
        "off",
        {
          additionalHooks: "(useMyCustomHook|useAnotherHook)",
        },
      ],
      "max-len": [
        "error",
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
    },
  },
];
