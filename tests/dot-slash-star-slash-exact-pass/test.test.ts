var exec = require("child_process").exec;

test("675314d3-5b8f-4db8-ad60-3eaf5a0bed22", async () => {
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
