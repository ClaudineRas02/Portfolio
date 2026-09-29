import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  //les dossiers à ignorer
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  // Jest globals for tests (flat config override)
  {
    files: ["**/*.test.{js,jsx}", "**/__tests__/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", //version à detecter dans l env
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]);
