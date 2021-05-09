import { openConfig } from "./openConfig";
import { checkConfigType } from "./checkConfigType";
import { allFiles } from "./allFiles";
import { buildSearchFile, FileResult } from "./buildSearchFile";

type Exit =
  | { tag: "exit-and-pass" }
  | { tag: "exit-and-fail"; message: string };

export type CheckedConfig = {
  root: string;
  rules: Array<string>;
};

export async function execute(): Promise<Exit> {
  const openedConfig = await openConfig();
  switch (openedConfig.tag) {
    case "open-success":
      // funky `((): Exit => {})()` wrap and invoke
      // ... only funky to nudge compiler to infer tyes
      return (async (): Promise<Exit> => {
        const checkedConfig = checkConfigType(openedConfig.result);
        const configChecked: CheckedConfig = openedConfig.result as CheckedConfig;
        switch (checkedConfig.tag) {
          case "invalid-config":
            return {
              tag: "exit-and-fail" as const,
              message: checkedConfig.message,
            };
          case "valid-config":
            const files = await allFiles(configChecked.root);

            const searchFile = buildSearchFile(configChecked);
            const finalResult = files.reduce<FileResult>(searchFile, {
              tag: "no-rejected-file-yet",
            });

            switch (finalResult.tag) {
              case "rejected-file":
                return {
                  tag: "exit-and-fail" as const,
                  message: finalResult.message,
                };
              case "no-rejected-file-yet":
                return { tag: "exit-and-pass" };
            }
        }
      })();
    case "open-error":
      return { tag: "exit-and-fail" as const, message: openedConfig.message };
  }
}
