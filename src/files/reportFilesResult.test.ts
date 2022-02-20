import { reportFilesResult } from "./reportFilesResult";

describe("reportFilesResult", () => {
  it("fails if a single file fails", () => {
    const result = reportFilesResult({
      tag: "rejected-file",
      message: "dcaedfb2-e7f3-4ba1-81e0-4423a74fb6d8",
    });

    expect(result).toStrictEqual({
      tag: "exit-and-fail",
      message: "dcaedfb2-e7f3-4ba1-81e0-4423a74fb6d8",
    });
  });

  it("passes if no files fail", () => {
    const result = reportFilesResult({ tag: "no-rejected-file-yet" });

    expect(result).toStrictEqual({ tag: "exit-and-pass" as const });
  });
});
