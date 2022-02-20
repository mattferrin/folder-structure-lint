import { unrecognizedKey } from "./unrecognizedKey";

describe("unrecognizedKey", () => {
  test("that correct error is shown for an unrecognized config key", () => {
    const result = unrecognizedKey("5827bf15-16b2-405b-8987-abe6659ff1dc");

    expect(result).toStrictEqual({
      tag: "invalid-config",
      message: `The key "5827bf15-16b2-405b-8987-abe6659ff1dc" is not recognized`,
    });
  });
});
