"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRules = void 0;
var buildCheckRule_1 = require("./buildCheckRule");
function checkRules(configChecked, file) {
    return configChecked.rules.reduce(buildCheckRule_1.buildCheckRule(file), {
        tag: "searching-rules",
    });
}
exports.checkRules = checkRules;
