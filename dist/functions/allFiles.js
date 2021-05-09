"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFiles = void 0;
var glob = require("glob");
function allFiles(root) {
    return new Promise(function (resolve, reject) {
        glob(root + "/**", { nodir: true }, function (error, files) {
            if (error) {
                reject(error);
            }
            else {
                resolve(files);
            }
        });
    });
}
exports.allFiles = allFiles;
