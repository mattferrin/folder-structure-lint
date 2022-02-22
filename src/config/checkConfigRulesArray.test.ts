import { checkConfigRulesArray } from "./checkConfigRulesArray";
import * as isArrayOfStrings from "./isArrayOfStrings";

describe("checkConfigRulesArray", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test.each([
    [
      true,
      {
        hasRules: true,
        hasRoot: false,
        tag: "valid-config",
      },
    ],
    [
      false,
      {
        tag: "invalid-config",
        message: "The `rule` must be a non-empty array of strings",
      },
    ],
  ])(
    "output based on array check result",
    (isArrayOfStringsResult, expectedResult) => {
      const isArrayOfStringsMock = jest
        .spyOn(isArrayOfStrings, "isArrayOfStrings")
        .mockImplementation(() => isArrayOfStringsResult);

      const result = checkConfigRulesArray([], {
        hasRules: false,
        hasRoot: false,
        tag: "valid-config",
      });

      expect(isArrayOfStringsMock).toBeCalledTimes(1);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
