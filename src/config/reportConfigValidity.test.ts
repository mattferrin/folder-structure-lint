import { Validation } from "./checkConfig";
import { reportConfigValidity } from "./reportConfigValidity";
import * as reportMissingConfigKeys from "./reportMissingConfigKeys";

describe("reportConfigValidity", () => {
  const uniqueResult = "6c94ba79-de8c-4be4-8ac0-94bcf0935af5";

  describe.each([
    ["valid", { tag: "valid-config" }, 1, uniqueResult],
    ["invalid", { tag: "invalid-config" }, 0, { tag: "invalid-config" }],
  ] as [string, Validation, number, any][])(
    "testName",
    (testName, input, reportMissingConfigKeysTimes, resultExpected) => {
      beforeEach(() => {
        jest.resetAllMocks();
      });

      test(testName, () => {
        const reportMissingConfigKeysMock = jest
          .spyOn(reportMissingConfigKeys, "reportMissingConfigKeys")
          .mockImplementation((() => uniqueResult) as any);

        const result = reportConfigValidity(input);

        expect(reportMissingConfigKeysMock).toBeCalledTimes(
          reportMissingConfigKeysTimes
        );
        expect(result).toStrictEqual(resultExpected);
      });
    }
  );
});
