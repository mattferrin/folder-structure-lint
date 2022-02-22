import { ValidConfig } from "./checkConfig";
import { reportMissingConfigKeys } from "./reportMissingConfigKeys";

describe("reportMissingConfigKeys", () => {
  describe.each([
    [
      "root missing",
      { hasRoot: false, hasRules: true, tag: "valid-config" },
      {
        message: 'The "root" is missing from the config file',
        tag: "invalid-config",
      },
    ],
    [
      "rules missing",
      { hasRoot: true, hasRules: false, tag: "valid-config" },
      {
        message: 'The "rules" are missing from the config file',
        tag: "invalid-config",
      },
    ],
    [
      "no issues",
      { hasRoot: true, hasRules: true, tag: "valid-config" },
      { hasRoot: true, hasRules: true, tag: "valid-config" },
    ],
  ] as [string, ValidConfig, any][])(
    "testName",
    (testName, input, resultExpected) => {
      test(testName, () => {
        const result = reportMissingConfigKeys(input);

        expect(result).toStrictEqual(resultExpected);
      });
    }
  );
});
