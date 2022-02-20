"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigKeys = void 0;
var checkConfigKeyUnless_1 = require("./checkConfigKeyUnless");
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/ban-types
function checkConfigKeys(config) {
    return Object.entries(config).reduce(checkConfigKeyUnless_1.checkConfigKeyUnless, {
        tag: "valid-config",
        hasRoot: false,
        hasRules: false,
    });
}
exports.checkConfigKeys = checkConfigKeys;
