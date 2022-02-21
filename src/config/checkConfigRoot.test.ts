import { checkConfigRoot } from "./checkConfigRoot";

describe("checkConfigRoot", () => {
  test.each([[""], ["a"], ["ab"]])("is valid root value", (rootValue) => {
    const result = checkConfigRoot(rootValue, {
      tag: "valid-config",
      hasRoot: false,
      hasRules: false,
    });

    expect(result).toStrictEqual({
      tag: "valid-config",
      hasRoot: true,
      hasRules: false,
    });
  });

  test.each([[{}], [[]]])("is invalid root value", (rootValue) => {
    const result = checkConfigRoot(rootValue, {
      tag: "valid-config",
      hasRoot: false,
      hasRules: false,
    });

    expect(result).toStrictEqual({
      tag: "invalid-config",
      message: "The `root` must be a string",
    });
  });
});
