import { Validation } from "./checkConfig";
import { checkConfigRoot } from "./checkConfigRoot";
import { checkConfigRules } from "./checkConfigRules";
import { unrecognizedKey } from "../rules/unrecognizedKey";

export type ValidConfig = {
  readonly tag: "valid-config";
  readonly hasRoot: boolean;
  readonly hasRules: boolean;
};

export function checkConfigKey(
  key: string,
  value: unknown,
  previousValue: ValidConfig
): Validation {
  switch (key) {
    case "root":
      return checkConfigRoot(value, previousValue);
    case "rules":
      return checkConfigRules(value, previousValue);
    default:
      return unrecognizedKey(key);
  }
}
