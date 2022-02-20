import { CheckedConfig } from "../config/execute";
import * as buildCheckRule from "./buildCheckRule";
import { checkRules } from "./checkRules";

describe("checkRules", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test.each([
    [{ rules: [], root: "" }, 1, 0],
    [{ rules: [""], root: "" }, 1, 1],
    [{ rules: ["", ""], root: "" }, 1, 2],
  ] as [CheckedConfig, number, number][])(
    "are built once and executed length times",
    (checkedConfig, expectBuildCheckCalledTimes, expectCheckCalledTimes) => {
      const checkRuleMock = jest.fn();
      const buildCheckRuleMock = jest
        .spyOn(buildCheckRule, "buildCheckRule")
        .mockImplementation((() => {
          return checkRuleMock;
        }) as any);

      const file = "92a3dd39-ce7a-4484-8a21-5d8da887971f";
      checkRules(checkedConfig, file);

      expect(buildCheckRuleMock).toHaveBeenCalledTimes(
        expectBuildCheckCalledTimes
      );
      expect(buildCheckRuleMock).toHaveBeenCalledWith(file);
      expect(checkRuleMock).toHaveBeenCalledTimes(expectCheckCalledTimes);
    }
  );
});
