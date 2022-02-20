import { FileResult } from "../files/buildSearchFile";
import { CheckedRuleResult } from "./buildCheckRule";
import { ruleResult } from "./ruleResult";

describe("ruleResult", () => {
  const file = "e4f61c2e-f798-44a5-8f2e-b7f67912d029";
  test.each([
    [
      { tag: "searching-rules" },
      {
        tag: "rejected-file",
        message: `No rules found matching "${file}"`,
      },
    ],
    [{ tag: "found-rule" }, { tag: "no-rejected-file-yet" }],
  ] as [CheckedRuleResult, FileResult][])(
    "final status translates to correct message",
    (checkedRuleResult, fileResultExpected) => {
      const result = ruleResult(checkedRuleResult, file);

      expect(result).toEqual(fileResultExpected);
    }
  );
});
