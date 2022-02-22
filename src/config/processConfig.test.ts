import * as checkConfig from "./checkConfig";
import * as checkedConfigResult from "./checkedConfigResult";
import { processConfig } from "./processConfig";

describe("processConfig", () => {
  test("to invoke all as expected", () => {
    const checkConfigResult = "15322ad5-14a2-4caa-b2cf-8bbaa07c9a0f";
    const checkConfigMock = jest
      .spyOn(checkConfig, "checkConfig")
      .mockImplementation((() => checkConfigResult) as any);
    const checkedConfigResultMock = jest
      .spyOn(checkedConfigResult, "checkedConfigResult")
      .mockImplementation((() => {}) as any);

    const result = {
      "f49ef5db-1649-4d29-9c40-b060e97ae545":
        "ca12b0a0-a17d-44f1-81ef-dc501f273ed6",
    };
    processConfig({
      tag: "open-success",
      result,
    });

    expect(checkConfigMock).toHaveBeenCalledTimes(1);
    expect(checkConfigMock).toBeCalledWith(result);
    expect(checkedConfigResultMock).toHaveBeenCalledTimes(1);
    expect(checkedConfigResultMock).toBeCalledWith(checkConfigResult, result);
  });
});
