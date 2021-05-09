"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSearchFile = void 0;
var buildCheckRule_1 = require("./buildCheckRule");
function buildSearchFile(configChecked) {
    return function searchFile(fileAccumulator, file) {
        if (fileAccumulator.tag === "rejected-file") {
            return fileAccumulator; // 1 file already failed so report only it
        }
        var ruleResult = configChecked.rules.reduce(buildCheckRule_1.buildCheckRule(file), { tag: "searching-rules" });
        switch (ruleResult.tag) {
            case "searching-rules":
                return {
                    tag: "rejected-file",
                    message: "No rules found matching \"" + file + "\"",
                };
            case "found-rule":
                return { tag: "no-rejected-file-yet" };
        }
    };
}
exports.buildSearchFile = buildSearchFile;
