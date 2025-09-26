import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { ignores: ["node_modules/", "dist/", "package-lock.json"] },
  {
    plugins: { jest },
    rules: { ...jest.configs.recommended.rules },
    languageOptions: { globals: { ...globals.jest } },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules/", "dist/"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
]);
