import glob from "glob";
import { allFiles } from "./allFiles";
import * as buildAllFilesCallback from "./buildAllFilesCallback";

jest.mock("glob");

describe("allFiles", () => {
  test("glob built and invoked as expected", () => {
    const buildAllFilesCallbackMock = jest
      .spyOn(buildAllFilesCallback, "buildAllFilesCallback")
      .mockImplementation((() => {
        return () => {};
      }) as any);

    const root = "1c5b65fd-9160-4ebf-ba50-6171a9b57ff3";
    allFiles(root);

    expect(glob).toHaveBeenCalledTimes(1);
    expect(glob).toHaveBeenCalledWith(
      `${root}/**`,
      { nodir: true },
      expect.any(Function)
    );

    expect(buildAllFilesCallbackMock).toHaveBeenCalledTimes(1);
    expect(buildAllFilesCallbackMock).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Function)
    );
  });
});
