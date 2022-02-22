var exec = require("child_process").exec;

test("921bef90-c5f6-40a7-a4c8-f97071a9892f", async () => {
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
  expect(result.stderr).toBe(
    'No rules found matching "./exact.inexact.exact"\n'
  );
});
