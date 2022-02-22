import { openConfig } from "./openConfig";
import * as readConfigFile from "./readConfigFile";

describe("openConfig", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const uniqueExpectedResult = "fbae3600-418f-4501-961f-bac8833437c2";
  test.each([
    [
      (resolve: (arg0: string) => void) => {
        resolve(uniqueExpectedResult);
      },
      uniqueExpectedResult,
    ],
    [
      () => {
        throw new Error("catch-able");
      },
      {
        tag: "open-error",
        message: 'Could not open the config file ".folder-structure-lint.json"',
      },
    ],
  ])(
    "readConfigFile invoke both throws and succeeds correctly",
    async (readConfigFileThrow, resultExpected) => {
      const readConfigFileMock = jest
        .spyOn(readConfigFile, "readConfigFile")
        .mockImplementation(readConfigFileThrow as any);

      const result = await openConfig();

      expect(readConfigFileMock).toHaveBeenCalledTimes(1);
      expect(readConfigFileMock).toBeCalledWith(expect.any(Function));
      expect(result).toStrictEqual(resultExpected);
    }
  );
});
