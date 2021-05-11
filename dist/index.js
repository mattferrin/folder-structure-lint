"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var execute_1 = require("./functions/execute");
execute_1.execute().then(function (executed) {
    switch (executed.tag) {
        case "exit-and-fail":
            console.error(executed.message);
            process.exit(1);
        case "exit-and-pass":
            console.info("No rule violations detected");
            return 0;
    }
});
