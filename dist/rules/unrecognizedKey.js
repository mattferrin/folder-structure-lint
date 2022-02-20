"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unrecognizedKey = void 0;
function unrecognizedKey(key) {
    return {
        tag: "invalid-config",
        message: "The key \"" + key + "\" is not recognized",
    };
}
exports.unrecognizedKey = unrecognizedKey;
