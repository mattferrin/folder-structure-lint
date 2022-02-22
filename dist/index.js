"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-fallthrough */
/* eslint-disable functional/no-expression-statement */
var execute_1 = require("./config/execute");
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
