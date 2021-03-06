/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */

import fs from "fs";
import { buildReadConfigFileCallback } from "./buildReadConfigFileCallback";
import { OpenResult } from "./openConfig";

// eslint-disable-next-line functional/no-return-void, @typescript-eslint/prefer-readonly-parameter-types
export type Accept = (value: OpenResult | PromiseLike<OpenResult>) => void;

export const configFile = ".folder-structure-lint.json";
export const message = `Could not open the config file "${configFile}"`;

export function readConfigFile(accept: Accept) {
  fs.readFile(configFile, "utf8", buildReadConfigFileCallback(accept));
}
