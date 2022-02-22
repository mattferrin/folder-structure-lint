import * as processFiles from "../files/processFiles";
import { Validation } from "./checkConfig";
import { checkedConfigResult } from "./checkedConfigResult";
import { CheckedConfig } from "./execute";

describe("checkedConfigResult", () => {
  const message = "70001c48-0159-4952-8b7d-b869ed2d180b";
  test.each([
    [
      {
        tag: "invalid-config",
        message,
      },
      0,
      { message, tag: "exit-and-fail" },
    ],
    [
      {
        tag: "valid-config",
      },
      1,
      expect.any(Object),
    ],
  ])("", async (validation, processFilesTimes, expectedOutput) => {
    const processFilesMock = jest.spyOn(processFiles, "processFiles");

    const result = await checkedConfigResult(
      validation as Validation,
      {} as CheckedConfig
    );

    expect(processFilesMock).toBeCalledTimes(processFilesTimes);
    expect(result).toStrictEqual(expectedOutput);
  });
});
