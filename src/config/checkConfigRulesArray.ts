import { Validation, ValidConfig } from "./checkConfig";
import { isArrayOfStrings } from "./isArrayOfStrings";

const mustBeArrayOfStrings = {
  tag: "invalid-config" as const,
  message: "The `rule` must be a non-empty array of strings",
};

export function checkConfigRulesArray(
  value: readonly unknown[],
  previousValue: ValidConfig
): Validation {
  if (!isArrayOfStrings(value)) {
    return mustBeArrayOfStrings;
  } else {
    return {
      ...previousValue,
      hasRules: true,
    };
  }
}
