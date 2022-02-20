"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportFilesResult = void 0;
function reportFilesResult(finalResult) {
    switch (finalResult.tag) {
        case "rejected-file":
            return {
                tag: "exit-and-fail",
                message: finalResult.message,
            };
        case "no-rejected-file-yet":
            return { tag: "exit-and-pass" };
    }
}
exports.reportFilesResult = reportFilesResult;
