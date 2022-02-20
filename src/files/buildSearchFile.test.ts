import { CheckedRuleResult } from "../rules/buildCheckRule";
import * as checkRules from "../rules/checkRules";
import * as ruleResult from "../rules/ruleResult";
import { buildSearchFile } from "./buildSearchFile";

describe("buildSearchFile", () => {
  it("failed already once and forwards failure", () => {
    const searchFile = buildSearchFile({ root: "", rules: [] });
    const message = "11f640a0-04de-4651-b473-6b4a29241a23";
    const result = searchFile({ tag: "rejected-file", message }, "");

    expect(result).toStrictEqual({ tag: "rejected-file", message });
  });

  test("builds, invokes check, and invokes result of check", () => {
    const checkedRuleResult: CheckedRuleResult = { tag: "found-rule" };
    const checkRulesMock = jest
      .spyOn(checkRules, "checkRules")
      .mockImplementation(() => checkedRuleResult);
    const ruleResultMock = jest
      .spyOn(ruleResult, "ruleResult")
      .mockImplementation((() => {}) as any);

    const configChecked = {
      root: "1649d67b-9c70-42f6-96dc-c78a4bfb2b4c",
      rules: ["1c298e7b-8c96-426c-997f-daf775baee01"],
    };
    const searchFile = buildSearchFile(configChecked);
    const file = "a84ea4d4-18f2-4166-988e-2d3c858510d4";
    searchFile({ tag: "no-rejected-file-yet" }, file);

    expect(checkRulesMock).toBeCalledTimes(1);
    expect(checkRulesMock).toHaveBeenCalledWith(configChecked, file);
    expect(ruleResultMock).toBeCalledTimes(1);
    expect(ruleResultMock).toHaveBeenCalledWith(checkedRuleResult, file);
  });
});
