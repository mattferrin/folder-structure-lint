"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayOfStrings = void 0;
function isArrayOfStrings(value) {
    return (value.length !== 0 &&
        value.every(function (rule) {
            return typeof rule === "string";
        }));
}
exports.isArrayOfStrings = isArrayOfStrings;
