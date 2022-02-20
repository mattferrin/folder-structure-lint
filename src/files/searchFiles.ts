import { CheckedConfig } from "../config/execute";
import { buildSearchFile, FileResult } from "./buildSearchFile";

export function searchFiles(
  configChecked: CheckedConfig,
  files: readonly string[]
) {
  const searchFile = buildSearchFile(configChecked);
  return files.reduce<FileResult>(searchFile, {
    tag: "no-rejected-file-yet" as const,
  });
}
