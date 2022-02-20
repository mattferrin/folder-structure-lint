/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */

import fs from "fs";
import { OpenResult } from "./openConfig";

// eslint-disable-next-line functional/no-return-void, @typescript-eslint/prefer-readonly-parameter-types
type Accept = (value: OpenResult | PromiseLike<OpenResult>) => void;

export const configFile = ".folder-structure-lint.json";
export const message = `Could not open the config file "${configFile}"`;

export function readConfigFile(accept: Accept) {
  fs.readFile(configFile, "utf8", (err: unknown, data: string) => {
    if (err || !data) {
      accept({
        tag: "open-error",
        message,
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      accept({ tag: "open-success", result: JSON.parse(data) });
    }
  });
}
