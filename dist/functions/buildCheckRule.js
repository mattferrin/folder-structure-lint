"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCheckRule = void 0;
var minimatch_1 = __importDefault(require("minimatch"));
function buildCheckRule(file) {
    return function checkRule(ruleAccumulator, rule) {
        if (ruleAccumulator.tag === "found-rule") {
            return ruleAccumulator; // since 1 rule already matches file is good
        }
        var isRuleMatched = minimatch_1.default(file, rule, {});
        if (isRuleMatched) {
            return { tag: "found-rule" };
        }
        else {
            return { tag: "searching-rules" };
        }
    };
}
exports.buildCheckRule = buildCheckRule;
