import * as unrecognizedKey from "../rules/unrecognizedKey";
import { checkConfigKey } from "./checkConfigKey";
import * as checkConfigRoot from "./checkConfigRoot";
import * as checkConfigRules from "./checkConfigRules";

const validConfig = {
  tag: "valid-config" as const,
  hasRoot: true,
  hasRules: true,
};
const value = "5eb06233-7140-43ec-aec5-d411cf88bced";
const checkConfigRootMock = jest
  .spyOn(checkConfigRoot, "checkConfigRoot")
  .mockImplementation((() => {}) as any);
const checkConfigRulesMock = jest
  .spyOn(checkConfigRules, "checkConfigRules")
  .mockImplementation((() => {}) as any);
const unrecognizedKeyMock = jest
  .spyOn(unrecognizedKey, "unrecognizedKey")
  .mockImplementation((() => {}) as any);
const bogusKey = "7c45a8a0-dda8-465d-85ea-70112386c95f";

describe.each([
  ["checkConfigRoot", checkConfigRootMock, "root", [value, validConfig]],
  ["checkConfigRules", checkConfigRulesMock, "rules", [value, validConfig]],
  ["unrecognizedKeyMock", unrecognizedKeyMock, bogusKey, [bogusKey]],
])("checkConfigKey", (name, mock, key, calledWith) => {
  test(`${name} invoked`, () => {
    checkConfigKey(key, value, validConfig);

    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(...calledWith);
  });
});
