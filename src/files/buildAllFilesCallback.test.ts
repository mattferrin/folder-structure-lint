import { buildAllFilesCallback } from "./buildAllFilesCallback";

jest.mock("glob");

describe("buildAllFilesCallback", () => {
  const file = "0b264126-d664-4146-89fe-a964636ea306";
  test.each([
    // fail ...
    [true, true, true],
    ["x", true, "x"],
    [1, true, 1],
    // succeed ...
    [null, false, [file]],
    [undefined, false, [file]],
    [0, false, [file]],
    [false, false, [file]],
    ["", false, [file]],
  ])(
    "should error and succeed properly",
    async (error, shouldError, expectedResult) => {
      const test = new Promise((resolve, reject) => {
        const allFilesCallback = buildAllFilesCallback(resolve, reject);
        allFilesCallback(error, [file]);
      });

      if (shouldError) {
        const result = await test.then((x) => x).catch((result) => result);
        expect(result).toBe(expectedResult);
      } else {
        const result = await test.then((result) => result);
        expect(result).toStrictEqual(expectedResult);
      }
    }
  );
});
