"use strict";
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildReadConfigFileCallback = void 0;
var readConfigFile_1 = require("./readConfigFile");
function buildReadConfigFileCallback(accept) {
    return function readConfigFileCallback(err, data) {
        if (err || !data) {
            accept({
                tag: "open-error",
                message: readConfigFile_1.message,
            });
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            accept({ tag: "open-success", result: JSON.parse(data) });
        }
    };
}
exports.buildReadConfigFileCallback = buildReadConfigFileCallback;
