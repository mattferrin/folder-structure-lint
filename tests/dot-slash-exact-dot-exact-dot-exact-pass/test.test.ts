var exec = require("child_process").exec;

test("82cf15b1-7923-44dd-9678-88b855d1667b", async () => {
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
