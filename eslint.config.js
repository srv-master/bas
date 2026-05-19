module.exports = [
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      // Vi hårdkodar in de viktigaste globala variablerna för Node/Express
      // så slipper vi vara beroende av externa npm-paket i detta steg!
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        express: "readonly",
      },
    },
    rules: {
      "no-undef": "error", // Rödmarkera consoll.log och okända variabler
      "no-const-assign": "error", // Rödmarkera x = 3 (överskrivning av const)
      "no-unused-vars": "warn", // Gulmarkera variabler som glömts bort
    },
  },
];
