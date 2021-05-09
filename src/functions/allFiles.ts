var glob = require("glob");

export function allFiles(root: string): Promise<Array<string>> {
  return new Promise<Array<string>>((resolve, reject) => {
    glob(
      `${root}/**`,
      { nodir: true },
      function (error: unknown, files: string[] | PromiseLike<string[]>) {
        if (error) {
          reject(error);
        } else {
          resolve(files);
        }
      }
    );
  });
}
