/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */

import fs from "fs";
import { readConfigFile } from "./readConfigFile";

jest.mock("fs");

describe("readConfigFile", () => {
  test("", () => {
    const readFileMock = jest
      .spyOn(fs, "readFile")
      .mockImplementation((() => {}) as any);

    readConfigFile(() => {});

    expect(readFileMock).toBeCalledTimes(1);
    expect(readFileMock).toHaveBeenCalledWith(
      ".folder-structure-lint.json",
      "utf8",
      expect.any(Function)
    );
  });
});
