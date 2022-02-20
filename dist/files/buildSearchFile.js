"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSearchFile = void 0;
var checkRules_1 = require("../rules/checkRules");
var ruleResult_1 = require("../rules/ruleResult");
function buildSearchFile(configChecked) {
    return function searchFile(fileAccumulator, file) {
        if (fileAccumulator.tag === "rejected-file") {
            return fileAccumulator; // 1 file already failed so report only it
        }
        else {
            var checkedRuleResult = checkRules_1.checkRules(configChecked, file);
            return ruleResult_1.ruleResult(checkedRuleResult, file);
        }
    };
}
exports.buildSearchFile = buildSearchFile;
