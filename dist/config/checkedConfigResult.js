"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkedConfigResult = void 0;
var processFiles_1 = require("../files/processFiles");
function checkedConfigResult(checkedConfig, configChecked) {
    switch (checkedConfig.tag) {
        case "invalid-config":
            return {
                tag: "exit-and-fail",
                message: checkedConfig.message,
            };
        case "valid-config": {
            return processFiles_1.processFiles(configChecked);
        }
    }
}
exports.checkedConfigResult = checkedConfigResult;
