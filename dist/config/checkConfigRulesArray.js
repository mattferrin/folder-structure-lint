"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigRulesArray = void 0;
var isArrayOfStrings_1 = require("./isArrayOfStrings");
var mustBeArrayOfStrings = {
    tag: "invalid-config",
    message: "The `rule` must be a non-empty array of strings",
};
function checkConfigRulesArray(value, previousValue) {
    if (!isArrayOfStrings_1.isArrayOfStrings(value)) {
        return mustBeArrayOfStrings;
    }
    else {
        return __assign(__assign({}, previousValue), { hasRules: true });
    }
}
exports.checkConfigRulesArray = checkConfigRulesArray;
