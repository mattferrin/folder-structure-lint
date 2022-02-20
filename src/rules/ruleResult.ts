import { CheckedRuleResult } from "./buildCheckRule";

export function ruleResult(checkedRuleResult: CheckedRuleResult, file: string) {
  switch (checkedRuleResult.tag) {
    case "searching-rules":
      return {
        tag: "rejected-file" as const,
        message: `No rules found matching "${file}"`,
      };
    case "found-rule":
      return { tag: "no-rejected-file-yet" as const };
  }
}
