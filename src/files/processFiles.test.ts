import * as allFiles from "./allFiles";
import { FileResult } from "./buildSearchFile";
import { processFiles } from "./processFiles";
import * as reportFilesResult from "./reportFilesResult";
import * as searchFiles from "./searchFiles";

describe("processFiles", () => {
  it("gets files, searches them, and reports the result", async () => {
    const files = ["0428990d-af6f-40e8-933f-560c0f77c762"];
    const allFilesMock = jest
      .spyOn(allFiles, "allFiles")
      .mockImplementation((() => files) as any);
    const finalResult: FileResult = {
      tag: "rejected-file",
      message: "ff002ac6-1410-45e3-a3e8-62f95f193292",
    };
    const searchFilesMock = jest
      .spyOn(searchFiles, "searchFiles")
      .mockImplementation(() => finalResult);
    const reportFilesResultMock = jest
      .spyOn(reportFilesResult, "reportFilesResult")
      .mockImplementation((() => {}) as any);

    const root = "8c91c165-2962-49a2-87b5-e0d9fb8f45ae";
    const configChecked = { root, rules: [] };
    await processFiles(configChecked);

    expect(allFilesMock).toHaveBeenCalledTimes(1);
    expect(allFilesMock).toHaveBeenCalledWith(root);
    expect(searchFilesMock).toHaveBeenCalledTimes(1);
    expect(searchFilesMock).toHaveBeenCalledWith(configChecked, files);
    expect(reportFilesResultMock).toHaveBeenCalledTimes(1);
    expect(reportFilesResultMock).toHaveBeenCalledWith(finalResult);
  });
});
