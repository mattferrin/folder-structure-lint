import minimatch from "minimatch";

export function minimatchRule(file: string, rule: string) {
  const isRuleMatched = minimatch(file, rule, {});
  if (isRuleMatched) {
    return { tag: "found-rule" as const };
  } else {
    return { tag: "searching-rules" as const };
  }
}
