var exec = require("child_process").exec;

test("990340ed-b7e7-4099-80dc-d1fb92433986", async () => {
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
    'No rules found matching "./inexact.exact.exact"\n'
  );
});
