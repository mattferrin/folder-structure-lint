import { allFiles } from "./allFiles";
import { buildSearchFile, FileResult } from "./buildSearchFile";
import { CheckedConfig } from "../config/execute";
import { reportFilesResult } from "./reportFilesResult";

export async function processFiles(configChecked: CheckedConfig) {
  const files = await allFiles(configChecked.root);

  const searchFile = buildSearchFile(configChecked);
  const finalResult = files.reduce<FileResult>(searchFile, {
    tag: "no-rejected-file-yet" as const,
  });

  return reportFilesResult(finalResult);
}
