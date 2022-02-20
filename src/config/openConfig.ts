/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-try-statement */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */

import { message, readConfigFile } from "./readConfigFile";

export type OpenSuccess = {
  readonly tag: "open-success";
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly result: Object;
};
export type OpenError = {
  readonly tag: "open-error";
  readonly message: string;
};
export type OpenResult = OpenSuccess | OpenError;
export type FileName = ".folder-structure-lint.json";

export async function openConfig(): Promise<OpenResult> {
  return new Promise<OpenResult>((accept) => {
    try {
      readConfigFile(accept);
    } catch (error) {
      accept({
        tag: "open-error",
        message,
      });
    }
  });
}
