"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCheckRule = void 0;
var minimatchRule_1 = require("./minimatchRule");
function buildCheckRule(file) {
    return function checkRule(ruleAccumulator, rule) {
        if (ruleAccumulator.tag === "found-rule") {
            return ruleAccumulator; // since 1 rule already matches file is good
        }
        else {
            return minimatchRule_1.minimatchRule(file, rule);
        }
    };
}
exports.buildCheckRule = buildCheckRule;
