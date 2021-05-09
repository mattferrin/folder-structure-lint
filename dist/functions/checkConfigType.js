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
exports.checkConfigType = void 0;
function checkConfigType(config) {
    var result = Object.entries(config).reduce(function (previousValue, _a) {
        var key = _a[0], value = _a[1];
        switch (previousValue.tag) {
            case "invalid-config":
                return previousValue;
            case "valid-config":
                switch (key) {
                    case "root":
                        if (typeof value !== "string") {
                            return {
                                tag: "invalid-config",
                                message: "The `root` must be a string",
                            };
                        }
                        else {
                            return __assign(__assign({}, previousValue), { hasRoot: true });
                        }
                    case "rules":
                        if (typeof (value === null || value === void 0 ? void 0 : value.every) !== "function" ||
                            value.length === 0 ||
                            !value.every(function (rule) {
                                return typeof rule === "string";
                            })) {
                            return {
                                tag: "invalid-config",
                                message: "The `rule` must be a non-empty array of strings",
                            };
                        }
                        else {
                            return __assign(__assign({}, previousValue), { hasRules: true });
                        }
                    default:
                        return {
                            tag: "invalid-config",
                            message: "The key \"" + key + "\" is not recognized",
                        };
                }
        }
    }, { tag: "valid-config", hasRoot: false, hasRules: false });
    switch (result.tag) {
        case "invalid-config":
            return result;
        case "valid-config":
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
}
exports.checkConfigType = checkConfigType;
