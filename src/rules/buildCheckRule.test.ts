import { buildCheckRule } from "./buildCheckRule";
import * as minimatchRule from "./minimatchRule";

describe("buildCheckRule", () => {
  it("matches once and there are no further checks", () => {
    const checkRule = buildCheckRule("");
    const result = checkRule({ tag: "found-rule" }, "");
    expect(result).toStrictEqual({ tag: "found-rule" });
  });

  it("is still searching", () => {
    const minimatchRuleMock = jest
      .spyOn(minimatchRule, "minimatchRule")
      .mockImplementation(() => jest.fn() as any);

    const file = "fdb8ecf9-80bc-4ce9-a681-5982fdd094ff";
    const checkRule = buildCheckRule(file);
    const rule = "d7e5da25-1ce0-42fc-85a9-40a4c6d5a022";
    checkRule({ tag: "searching-rules" }, rule);

    expect(minimatchRuleMock).toBeCalledTimes(1);
    expect(minimatchRuleMock).toBeCalledWith(file, rule);
  });
});
