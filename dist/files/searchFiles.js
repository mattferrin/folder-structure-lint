"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchFiles = void 0;
var buildSearchFile_1 = require("./buildSearchFile");
function searchFiles(configChecked, files) {
    var searchFile = buildSearchFile_1.buildSearchFile(configChecked);
    return files.reduce(searchFile, {
        tag: "no-rejected-file-yet",
    });
}
exports.searchFiles = searchFiles;
