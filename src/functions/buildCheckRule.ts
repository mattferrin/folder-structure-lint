import minimatch from "minimatch";

export type RuleResult = { tag: "found-rule" } | { tag: "searching-rules" };

export function buildCheckRule(file: string) {
  return function checkRule(ruleAccumulator: RuleResult, rule: string) {
    if (ruleAccumulator.tag === "found-rule") {
      return ruleAccumulator; // since 1 rule already matches file is good
    }

    const isRuleMatched = minimatch(file, rule, {});
    if (isRuleMatched) {
      return { tag: "found-rule" as const };
    } else {
      return { tag: "searching-rules" as const };
    }
  };
}
