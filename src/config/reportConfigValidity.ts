import { Validation } from "./checkConfig";
import { reportMissingConfigKeys } from "./reportMissingConfigKeys";

export function reportConfigValidity(result: Validation): Validation {
  switch (result.tag) {
    case "invalid-config":
      return result;
    case "valid-config":
      return reportMissingConfigKeys(result);
  }
}
