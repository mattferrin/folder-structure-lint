import { execute } from "./execute";
import * as openConfig from "./openConfig";
import * as processConfig from "./processConfig";

describe("", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const message = "648a4513-ac14-4b76-b8bf-7432e97a212b";
  const processConfigUniqueResult = "39bd9ea4-6a81-40be-8bfe-0292b74d62a8";
  test.each([
    [
      {
        tag: "open-error" as const,
        message,
      },
      0,
      { tag: "exit-and-fail", message },
    ],
    [
      {
        tag: "open-success" as const,
      },
      1,
      processConfigUniqueResult,
    ],
  ])("", async (openConfigResult, processConfigTimes, resultExpected) => {
    const openConfigMock = jest
      .spyOn(openConfig, "openConfig")
      .mockImplementation(
        async () => openConfigResult as openConfig.OpenResult
      );
    const processConfigMock = jest
      .spyOn(processConfig, "processConfig")
      .mockImplementation((() => processConfigUniqueResult) as any);

    const result = await execute();

    expect(openConfigMock).toBeCalledTimes(1);
    expect(processConfigMock).toBeCalledTimes(processConfigTimes);
    expect(result).toEqual(resultExpected);
  });
});
