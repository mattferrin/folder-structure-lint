/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */

import { Accept, message } from "./readConfigFile";

export function buildReadConfigFileCallback(accept: Accept) {
  return function readConfigFileCallback(err: unknown, data: string) {
    if (err || !data) {
      accept({
        tag: "open-error",
        message,
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      accept({ tag: "open-success", result: JSON.parse(data) });
    }
  };
}
