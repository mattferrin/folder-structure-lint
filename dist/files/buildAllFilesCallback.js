"use strict";
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAllFilesCallback = void 0;
function buildAllFilesCallback(resolve, reject) {
    return function allFilesCallback(error, files) {
        if (error) {
            reject(error);
        }
        else {
            resolve(files);
        }
    };
}
exports.buildAllFilesCallback = buildAllFilesCallback;
