import { buildCheckRule, CheckedRuleResult } from "./buildCheckRule";
import { CheckedConfig } from "../config/execute";

export function checkRules(configChecked: CheckedConfig, file: string) {
  return configChecked.rules.reduce<CheckedRuleResult>(buildCheckRule(file), {
    tag: "searching-rules" as const,
  });
}
