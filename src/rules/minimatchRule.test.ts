import * as minimatch from "minimatch";
import { minimatchRule } from "./minimatchRule";

jest.mock("minimatch", () => jest.fn());

describe("minimatchRule", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test.each([
    [true, { tag: "found-rule" as const }],
    [false, { tag: "searching-rules" as const }],
  ])("minimatchRule", (isRuleMatched, expectedResult) => {
    (minimatch as any).mockReturnValue(isRuleMatched);

    const file = "0c2a2a51-a1da-48fc-84b3-7f9fe739ea2c";
    const rule = "cfd2516b-9879-4a98-a8e8-b8dd1f4d347b";
    const result = minimatchRule(file, rule);

    expect(minimatch).toBeCalledTimes(1);
    expect(minimatch).toBeCalledWith(file, rule, {});

    expect(result).toStrictEqual(expectedResult);
  });
});
