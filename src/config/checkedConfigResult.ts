import { Validation } from "./checkConfig";
import { CheckedConfig } from "./execute";
import { processFiles } from "../files/processFiles";

export function checkedConfigResult(
  checkedConfig: Validation,
  configChecked: CheckedConfig
) {
  switch (checkedConfig.tag) {
    case "invalid-config":
      return {
        tag: "exit-and-fail" as const,
        message: checkedConfig.message,
      };
    case "valid-config": {
      return processFiles(configChecked);
    }
  }
}
