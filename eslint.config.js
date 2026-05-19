import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // eller "commonjs" om ni använder require() istället for import
      globals: {
        ...globals.node,   // Säger till ESLint att "process", "require" etc. är okej
        ...globals.express // Säger till ESLint att Express-specifika saker är okej
      }
    },
    rules: {
      "no-unused-vars": "warn", // Varnar om de skapar variabler de inte använder
      "no-console": "off"       // Tillåter console.log (vilket elever använder mycket!)
    }
  }
];