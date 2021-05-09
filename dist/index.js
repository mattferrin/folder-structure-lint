"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var execute_1 = require("./functions/execute");
execute_1.execute().then(function (executed) {
    switch (executed.tag) {
        case "exit-and-fail":
            throw new Error(executed.message);
        case "exit-and-pass":
            console.info("No rule violations detected");
            return 0;
    }
});
