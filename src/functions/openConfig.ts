import fs from "fs";

export type OpenResult =
  | {
      tag: "open-success";
      result: Object;
    }
  | { tag: "open-error"; message: string };

export async function openConfig(): Promise<OpenResult> {
  return new Promise<OpenResult>((accept, reject) => {
    const configFile = ".folder-structure-lint.json";
    const message = `Could not open the config file "${configFile}"`;
    try {
      fs.readFile(configFile, "utf8", (err, data) => {
        if (err) {
          accept({
            tag: "open-error",
            message,
          });
        } else if (!data) {
          console.log(data, "fcd8b8f9-19cb-46f9-90c0-49e4e6d267d0");
          accept({
            tag: "open-error",
            message,
          });
        } else {
          accept({ tag: "open-success", result: JSON.parse(data) });
        }
      });
    } catch (error) {
      accept({
        tag: "open-error",
        message,
      });
    }
  });
}
