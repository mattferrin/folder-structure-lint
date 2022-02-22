var exec = require("child_process").exec;

test("5723705d-dc2a-47a2-a35a-cfe298c65719", async () => {
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
