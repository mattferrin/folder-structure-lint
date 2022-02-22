var exec = require("child_process").exec;

test("b8f22e5c-9583-458a-b747-ee1f10a52554", async () => {
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
    'No rules found matching "./exact.exact.inexact"\n'
  );
});
