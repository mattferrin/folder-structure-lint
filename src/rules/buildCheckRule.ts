import { minimatchRule } from "./minimatchRule";

export type CheckedRuleResult =
  | { readonly tag: "found-rule" }
  | { readonly tag: "searching-rules" };

export function buildCheckRule(file: string) {
  return function checkRule(ruleAccumulator: CheckedRuleResult, rule: string) {
    if (ruleAccumulator.tag === "found-rule") {
      return ruleAccumulator; // since 1 rule already matches file is good
    } else {
      return minimatchRule(file, rule);
    }
  };
}
