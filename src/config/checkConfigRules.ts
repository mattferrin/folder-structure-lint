import { Validation, ValidConfig } from "./checkConfig";
import { checkConfigRulesArray } from "./checkConfigRulesArray";

export function checkConfigRules(
  value: unknown,
  previousValue: ValidConfig
): Validation {
  if (!Array.isArray(value)) {
    return {
      tag: "invalid-config",
      message: "The `rules` must be an array",
    };
  } else {
    return checkConfigRulesArray(value, previousValue);
  }
}
