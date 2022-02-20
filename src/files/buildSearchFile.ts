import { checkRules } from "../rules/checkRules";
import { CheckedConfig } from "../config/execute";
import { ruleResult } from "../rules/ruleResult";

export type FileResult =
  | { readonly tag: "rejected-file"; readonly message: string }
  | { readonly tag: "no-rejected-file-yet" };

export function buildSearchFile(configChecked: CheckedConfig) {
  return function searchFile(
    fileAccumulator: FileResult,
    file: string
  ): FileResult {
    if (fileAccumulator.tag === "rejected-file") {
      return fileAccumulator; // 1 file already failed so report only it
    } else {
      const checkedRuleResult = checkRules(configChecked, file);
      return ruleResult(checkedRuleResult, file);
    }
  };
}
