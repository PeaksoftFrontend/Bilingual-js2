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
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: "error",
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^(StrictMode|App)$",
        },
      ],
      "no-console": "warn",
      "prefer-arrow-callback": "error",
      "func-style": ["error", "expression"],
      "no-alert": "error",
    },
  },
];
