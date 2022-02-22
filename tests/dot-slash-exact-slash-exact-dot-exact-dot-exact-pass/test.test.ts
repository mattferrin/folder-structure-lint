var exec = require("child_process").exec;

test("07804d23-34b2-4a9f-bd51-aa2ade279998", async () => {
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
