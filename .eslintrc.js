module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "functional"],
  rules: {
    "functional/no-conditional-statement": [
      "error",
      { allowReturningBranches: "ifExhaustive" },
    ],
    "max-lines-per-function": [
      "error",
      { max: 15, skipBlankLines: true, skipComments: true },
    ],
  },
};
