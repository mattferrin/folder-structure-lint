import { isArrayOfStrings } from "./isArrayOfStrings";

describe("isArrayOfStrings", () => {
  test.each([
    [[], false],
    [["30faf5eb-c0c0-4c9a-98c2-9530252ce49f"], true],
    [
      [
        "30faf5eb-c0c0-4c9a-98c2-9530252ce49f",
        "dbe26183-3fc9-47c9-8369-a2f2adb96a7f",
      ],
      true,
    ],
  ])("", (value, resultExpected) => {
    const result = isArrayOfStrings(value);

    expect(result).toEqual(resultExpected);
  });
});
