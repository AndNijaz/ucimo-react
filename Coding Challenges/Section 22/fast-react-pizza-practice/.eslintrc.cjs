module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        caughtErrors: "all",
        ignoreRestSiblings: false,
        reportUsedIgnorePattern: false,
      },
    ],
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
  },
};
