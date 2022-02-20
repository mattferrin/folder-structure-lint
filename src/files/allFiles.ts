/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */

import glob from "glob";
import { allFilesCallback } from "./allFilesCallback";

export function allFiles(root: string): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    glob(`${root}/**`, { nodir: true }, allFilesCallback(resolve, reject));
  });
}
