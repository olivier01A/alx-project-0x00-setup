// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";

export default [
  // Start with ESLint's recommended rules
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
