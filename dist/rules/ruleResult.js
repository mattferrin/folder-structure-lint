"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleResult = void 0;
function ruleResult(checkedRuleResult, file) {
    switch (checkedRuleResult.tag) {
        case "searching-rules":
            return {
                tag: "rejected-file",
                message: "No rules found matching \"" + file + "\"",
            };
        case "found-rule":
            return { tag: "no-rejected-file-yet" };
    }
}
exports.ruleResult = ruleResult;
