import { checkConfigKeys } from "./checkConfigKeys";
import * as checkConfigKeyUnless from "./checkConfigKeyUnless";

describe("checkConfigKeys", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test.each([
    [{}, 0],
    [{ a: "a" }, 1],
    [{ a: "a", b: "b" }, 2],
  ])("invokes for each object entry", (config, checkConfigKeyUnlessTimes) => {
    const checkConfigKeyUnlessMock = jest
      .spyOn(checkConfigKeyUnless, "checkConfigKeyUnless")
      .mockImplementation((() => {}) as any);

    checkConfigKeys(config);

    expect(checkConfigKeyUnlessMock).toBeCalledTimes(checkConfigKeyUnlessTimes);
  });
});
