"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigKeyUnless = void 0;
var checkConfigKey_1 = require("./checkConfigKey");
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/ban-types
function checkConfigKeyUnless(previousValue, _a) {
    var key = _a[0], value = _a[1];
    switch (previousValue.tag) {
        case "invalid-config":
            return previousValue;
        case "valid-config":
            return checkConfigKey_1.checkConfigKey(key, value, previousValue);
    }
}
exports.checkConfigKeyUnless = checkConfigKeyUnless;
