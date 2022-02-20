"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigKey = void 0;
var checkConfigRoot_1 = require("./checkConfigRoot");
var checkConfigRules_1 = require("./checkConfigRules");
var unrecognizedKey_1 = require("../rules/unrecognizedKey");
function checkConfigKey(key, value, previousValue) {
    switch (key) {
        case "root":
            return checkConfigRoot_1.checkConfigRoot(value, previousValue);
        case "rules":
            return checkConfigRules_1.checkConfigRules(value, previousValue);
        default:
            return unrecognizedKey_1.unrecognizedKey(key);
    }
}
exports.checkConfigKey = checkConfigKey;
