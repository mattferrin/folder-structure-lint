"use strict";
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFiles = void 0;
var glob_1 = __importDefault(require("glob"));
var allFilesCallback_1 = require("./allFilesCallback");
function allFiles(root) {
    return new Promise(function (resolve, reject) {
        glob_1.default(root + "/**", { nodir: true }, allFilesCallback_1.allFilesCallback(resolve, reject));
    });
}
exports.allFiles = allFiles;
