"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportMissingConfigKeys = void 0;
function reportMissingConfigKeys(result) {
    if (!result.hasRoot) {
        return {
            tag: "invalid-config",
            message: "The \"root\" is missing from the config file",
        };
    }
    else if (!result.hasRules) {
        return {
            tag: "invalid-config",
            message: "The \"rules\" are missing from the config file",
        };
    }
    else {
        return result;
    }
}
exports.reportMissingConfigKeys = reportMissingConfigKeys;
