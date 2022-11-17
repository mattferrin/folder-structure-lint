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
    project: ["./tsconfig.json", "./tsconfig.test.json"],
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
  overrides: [
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/require-await": "off",
        "functional/functional-parameters": "off",
        "functional/no-expression-statement": "off",
        "functional/no-return-void": "off",
        "functional/no-throw-statement": "off",
        "functional/prefer-readonly-type": "off",
        "max-lines-per-function": "off",
      },
    },
  ],
};
