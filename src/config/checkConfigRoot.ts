import { Validation, ValidConfig } from "./checkConfig";

const rootMustBeString: Validation = {
  tag: "invalid-config",
  message: "The `root` must be a string",
};

export function checkConfigRoot(
  value: unknown,
  previousValue: ValidConfig
): Validation {
  if (typeof value !== "string") {
    return rootMustBeString;
  } else {
    return {
      ...previousValue,
      hasRoot: true,
    };
  }
}
