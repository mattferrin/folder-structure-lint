"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportConfigValidity = void 0;
var reportMissingConfigKeys_1 = require("./reportMissingConfigKeys");
function reportConfigValidity(result) {
    switch (result.tag) {
        case "invalid-config":
            return result;
        case "valid-config":
            return reportMissingConfigKeys_1.reportMissingConfigKeys(result);
    }
}
exports.reportConfigValidity = reportConfigValidity;
