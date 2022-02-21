import { checkConfig, Validation } from "./checkConfig";
import * as checkConfigKeys from "./checkConfigKeys";
import * as reportConfigValidity from "./reportConfigValidity";

describe("checkConfig", () => {
  it("checks config keys and reports results", () => {
    const validation: Validation = {
      hasRoot: true,
      hasRules: true,
      tag: "valid-config",
    };
    const checkConfigKeysMock = jest
      .spyOn(checkConfigKeys, "checkConfigKeys")
      .mockImplementation(() => validation);
    const reportConfigValidityMock = jest
      .spyOn(reportConfigValidity, "reportConfigValidity")
      .mockImplementation((() => {}) as any);

    const config = {
      "525014f0-55d5-4560-8ef1-0522154b37c8":
        "81cc242c-0ea5-4ba9-a15d-6e0faf017620",
    };
    checkConfig(config);

    expect(checkConfigKeysMock).toBeCalledTimes(1);
    expect(checkConfigKeysMock).toBeCalledWith(config);
    expect(reportConfigValidityMock).toBeCalledTimes(1);
    expect(reportConfigValidityMock).toBeCalledWith(validation);
  });
});
