import { Validation } from "./checkConfig";
import * as checkConfigKey from "./checkConfigKey";
import { checkConfigKeyUnless } from "./checkConfigKeyUnless";

describe("checkConfigKeyUnless", () => {
  test("once invalid stop checking entries", () => {
    const previousValue = {
      tag: "invalid-config" as const,
      message: "d5b09ed3-3b68-4968-88ff-2b51786a6205",
    };
    const result = checkConfigKeyUnless(previousValue, ["", ""]);

    expect(result).toStrictEqual(previousValue);
  });

  test("check next entry", () => {
    const checkConfigKeyMock = jest
      .spyOn(checkConfigKey, "checkConfigKey")
      .mockImplementation((() => {}) as any);

    const previousValue: Validation = {
      tag: "valid-config",
    } as Validation;
    const inputs: [Validation, [string, unknown]] = [
      previousValue,
      [
        "6f598244-44b7-4b3f-bedc-82eaa204c64b",
        "eaf938c7-b321-4fba-a4a7-0ea8cc88c8d7",
      ],
    ];
    checkConfigKeyUnless(...inputs);

    expect(checkConfigKeyMock).toBeCalledTimes(1);
    expect(checkConfigKeyMock).toBeCalledWith(
      inputs[1][0],
      inputs[1][1],
      inputs[0]
    );
  });
});
