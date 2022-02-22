var exec = require("child_process").exec;

test("2475e88f-3ae2-4a4c-a033-ff2a1b9168b4", async () => {
  const result: any = await new Promise((resolve) => {
    exec(
      "node ../../dist/index.js",
      { cwd: __dirname },
      (error: any, stdout: any, stderr: any) => {
        resolve({ error, stdout, stderr });
      }
    );
  });

  expect(result.error).toBeFalsy();
  expect(result.stdout).toBe("No rule violations detected\n");
  expect(result.stderr).toBe("");
});
