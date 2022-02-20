import { Validation, ValidConfig } from "./checkConfig";

export function reportMissingConfigKeys(result: ValidConfig): Validation {
  if (!result.hasRoot) {
    return {
      tag: "invalid-config",
      message: `The "root" is missing from the config file`,
    };
  } else if (!result.hasRules) {
    return {
      tag: "invalid-config",
      message: `The "rules" are missing from the config file`,
    };
  } else {
    return result;
  }
}
