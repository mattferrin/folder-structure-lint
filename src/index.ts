import { execute } from "./functions/execute";

execute().then((executed): number => {
  switch (executed.tag) {
    case "exit-and-fail":
      throw new Error(executed.message);
    case "exit-and-pass":
      console.info("No rule violations detected");
      return 0;
  }
});
