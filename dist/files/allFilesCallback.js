"use strict";
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFilesCallback = void 0;
function allFilesCallback(resolve, reject) {
    return function allFilesGlob(error, files) {
        if (error) {
            reject(error);
        }
        else {
            resolve(files);
        }
    };
}
exports.allFilesCallback = allFilesCallback;
