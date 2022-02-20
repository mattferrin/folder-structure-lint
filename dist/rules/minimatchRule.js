"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimatchRule = void 0;
var minimatch_1 = __importDefault(require("minimatch"));
function minimatchRule(file, rule) {
    var isRuleMatched = minimatch_1.default(file, rule, {});
    if (isRuleMatched) {
        return { tag: "found-rule" };
    }
    else {
        return { tag: "searching-rules" };
    }
}
exports.minimatchRule = minimatchRule;
