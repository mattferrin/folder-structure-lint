/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */

import fs from "fs";
import { buildReadConfigFileCallback } from "./buildReadConfigFileCallback";
import { OpenResult } from "./openConfig";
import path from "path";
import { CheckedConfig } from "./execute";

// eslint-disable-next-line functional/no-return-void, @typescript-eslint/prefer-readonly-parameter-types
export type Accept = (value: OpenResult | PromiseLike<OpenResult>) => void;

export const configFile = ".folder-structure-lint.json";
export const jsConfigFile = ".folder-structure-lint.js";
export const message = `Could not open the config file "${configFile}" or "${jsConfigFile}"`;

type MaybeCheckedConfig = Partial<CheckedConfig>;

// eslint-disable-next-line max-lines-per-function
export function readConfigFile(accept: Accept) {
  if (fs.existsSync(jsConfigFile)) {
    const absolutePath = path.resolve(jsConfigFile);

    // eslint-disable-next-line functional/no-try-statement
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const config = require(absolutePath) as MaybeCheckedConfig;

      accept({ tag: "open-success", result: config });
    } catch {
      accept({
        tag: "open-error",
        message,
      });
    }
  } else {
    fs.readFile(configFile, "utf8", buildReadConfigFileCallback(accept));
  }
}
