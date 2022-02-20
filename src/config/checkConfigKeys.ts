import { Validation } from "./checkConfig";
import { checkConfigKeyUnless } from "./checkConfigKeyUnless";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/ban-types
export function checkConfigKeys(config: Object): Validation {
  return Object.entries(config).reduce<Validation>(checkConfigKeyUnless, {
    tag: "valid-config",
    hasRoot: false,
    hasRules: false,
  });
}
