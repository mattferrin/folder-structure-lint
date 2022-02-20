"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfig = void 0;
var checkConfigKeys_1 = require("./checkConfigKeys");
var reportConfigValidity_1 = require("./reportConfigValidity");
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/ban-types
function checkConfig(config) {
    var result = checkConfigKeys_1.checkConfigKeys(config);
    return reportConfigValidity_1.reportConfigValidity(result);
}
exports.checkConfig = checkConfig;
