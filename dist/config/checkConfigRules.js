"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigRules = void 0;
var checkConfigRulesArray_1 = require("./checkConfigRulesArray");
function checkConfigRules(value, previousValue) {
    if (!Array.isArray(value)) {
        return {
            tag: "invalid-config",
            message: "The `rules` must be an array",
        };
    }
    else {
        return checkConfigRulesArray_1.checkConfigRulesArray(value, previousValue);
    }
}
exports.checkConfigRules = checkConfigRules;
