import { Validation } from "../config/checkConfig";

export function unrecognizedKey(key: string): Validation {
  return {
    tag: "invalid-config",
    message: `The key "${key}" is not recognized`,
  };
}
