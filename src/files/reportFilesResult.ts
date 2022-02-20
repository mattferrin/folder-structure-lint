import { FileResult } from "./buildSearchFile";

export function reportFilesResult(finalResult: FileResult) {
  switch (finalResult.tag) {
    case "rejected-file":
      return {
        tag: "exit-and-fail" as const,
        message: finalResult.message,
      };
    case "no-rejected-file-yet":
      return { tag: "exit-and-pass" as const };
  }
}
