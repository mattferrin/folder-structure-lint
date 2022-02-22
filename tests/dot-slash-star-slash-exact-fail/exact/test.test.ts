var exec = require("child_process").exec;

test("10f615e4-e451-4687-9c72-e18e9cd1ddf4", async () => {
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
  expect(result.stderr).toBe('No rules found matching "./exact"\n');
});
