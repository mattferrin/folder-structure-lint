import * as buildSearchFile from "./buildSearchFile";
import { searchFiles } from "./searchFiles";

describe("searchFiles", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test.each([
    [[], 1, 0],
    [[""], 1, 1],
    [["", ""], 1, 2],
  ] as [string[], number, number][])(
    "are built once and executed length times",
    (files, expectBuildSearchFileTimes, expectSearchFileTimes) => {
      const searchFileMock = jest.fn();
      const buildSearchFileMock = jest
        .spyOn(buildSearchFile, "buildSearchFile")
        .mockImplementation((() => {
          return searchFileMock;
        }) as any);

      const configChecked = { rules: [], root: "" };
      searchFiles(configChecked, files);

      expect(buildSearchFileMock).toHaveBeenCalledTimes(
        expectBuildSearchFileTimes
      );
      expect(buildSearchFileMock).toHaveBeenCalledWith(configChecked);
      expect(searchFileMock).toHaveBeenCalledTimes(expectSearchFileTimes);
    }
  );
});
