"use strict";
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfigFile = exports.message = exports.configFile = void 0;
var fs_1 = __importDefault(require("fs"));
exports.configFile = ".folder-structure-lint.json";
exports.message = "Could not open the config file \"" + exports.configFile + "\"";
function readConfigFile(accept) {
    fs_1.default.readFile(exports.configFile, "utf8", function (err, data) {
        if (err || !data) {
            accept({
                tag: "open-error",
                message: exports.message,
            });
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            accept({ tag: "open-success", result: JSON.parse(data) });
        }
    });
}
exports.readConfigFile = readConfigFile;
