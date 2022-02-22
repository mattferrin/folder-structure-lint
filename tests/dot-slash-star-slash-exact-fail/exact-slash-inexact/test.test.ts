var exec = require("child_process").exec;

test("ccc55b27-5fab-4c40-bf27-344a9959591e", async () => {
  const result: any = await new Promise((resolve) => {
    exec(
      "node ../../../dist/index.js",
      { cwd: __dirname },
      (error: any, stdout: any, stderr: any) => {
        resolve({ error, stdout, stderr });
      }
    );
  });

  expect(result.error).toBeTruthy();
  expect(result.stdout).toBe("");
  expect(result.stderr).toBe('No rules found matching "./exact/inexact"\n');
});
