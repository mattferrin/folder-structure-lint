/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-fallthrough */
/* eslint-disable functional/no-expression-statement */
import { execute } from "./config/execute";

export async function main() {
  await execute().then((executed): number => {
    switch (executed.tag) {
      case "exit-and-fail":
        console.error(executed.message);
        process.exit(1);
        return 1;
      case "exit-and-pass":
        console.info("No rule violations detected");
        return 0;
    }
  });
}

main();
