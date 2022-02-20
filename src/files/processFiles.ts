import { CheckedConfig } from "../config/execute";
import { allFiles } from "./allFiles";
import { reportFilesResult } from "./reportFilesResult";
import { searchFiles } from "./searchFiles";

export async function processFiles(configChecked: CheckedConfig) {
  const files = await allFiles(configChecked.root);
  const finalResult = searchFiles(configChecked, files);

  return reportFilesResult(finalResult);
}
