import { execute } from "./functions/execute";

execute().then((executed): number => {
  switch (executed.tag) {
    case "exit-and-fail":
      console.error(executed.message);
      process.exit(1);
    case "exit-and-pass":
      console.info("No rule violations detected");
      return 0;
  }
});
