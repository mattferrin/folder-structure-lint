import { buildCheckRule, RuleResult } from "./buildCheckRule";
import { CheckedConfig } from "./execute";

export type FileResult =
  | { tag: "rejected-file"; message: string }
  | { tag: "no-rejected-file-yet" };

export function buildSearchFile(configChecked: CheckedConfig) {
  return function searchFile(
    fileAccumulator: FileResult,
    file: string
  ): FileResult {
    if (fileAccumulator.tag === "rejected-file") {
      return fileAccumulator; // 1 file already failed so report only it
    }

    const ruleResult = configChecked.rules.reduce<RuleResult>(
      buildCheckRule(file),
      { tag: "searching-rules" as const }
    );

    switch (ruleResult.tag) {
      case "searching-rules":
        return {
          tag: "rejected-file",
          message: `No rules found matching "${file}"`,
        };
      case "found-rule":
        return { tag: "no-rejected-file-yet" };
    }
  };
}
