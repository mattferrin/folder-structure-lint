import { Validation } from "./checkConfig";
import { checkConfigKey } from "./checkConfigKey";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/ban-types
export function checkConfigKeyUnless(
  previousValue: Validation,
  [key, value]: readonly [string, unknown]
): Validation {
  switch (previousValue.tag) {
    case "invalid-config":
      return previousValue;
    case "valid-config":
      return checkConfigKey(key, value, previousValue);
  }
}
