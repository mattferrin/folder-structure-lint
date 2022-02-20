/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */

export function allFilesCallback(
  resolve: (value: readonly string[] | PromiseLike<readonly string[]>) => void,
  reject: (reason?: unknown) => void
) {
  return function allFilesGlob(
    error: unknown,
    files: readonly string[] | PromiseLike<readonly string[]>
  ) {
    if (error) {
      reject(error);
    } else {
      resolve(files);
    }
  };
}
