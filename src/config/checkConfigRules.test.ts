import { ValidConfig } from "./checkConfigKey";
import { checkConfigRules } from "./checkConfigRules";
import * as checkConfigRulesArray from "./checkConfigRulesArray";

describe("checkConfigRules", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test.each([[""], [0], [{}]])("fails if value is not array", (value) => {
    const x = checkConfigRules(value, {} as ValidConfig);
    expect(x).toStrictEqual({
      tag: "invalid-config",
      message: "The `rules` must be an array",
    });
  });

  test.each([[[]], [[""]], [["", ""]], [[0, {}, null]]])(
    "proceeds if value is array",
    (value) => {
      const checkConfigRulesArrayMock = jest
        .spyOn(checkConfigRulesArray, "checkConfigRulesArray")
        .mockImplementation((() => {}) as any);

      const input = [value, { tag: "valid-config" } as ValidConfig];
      checkConfigRules(...input);

      expect(checkConfigRulesArrayMock).toBeCalledTimes(1);
      expect(checkConfigRulesArrayMock).toBeCalledWith(...input);
    }
  );
});
