/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-fallthrough */
/* eslint-disable functional/no-expression-statement */

import * as execute from "./config/execute";
import { Exit } from "./config/execute";
import { main } from "./index";

describe("main", () => {
  describe.each([
    ["fail", { tag: "exit-and-fail" }, 1, 0, 1],
    ["pass", { tag: "exit-and-pass" }, 0, 1, 0],
  ] as [string, Exit, number, number, number][])(
    "testName",
    (testName, exit, errorTimes, infoTimes, exitTimes) => {
      beforeEach(() => {
        jest.resetAllMocks();
      });

      test(testName, async () => {
        jest.spyOn(execute, "execute").mockImplementation(async () => {
          return exit;
        });
        const errorMock = jest
          .spyOn(global.console, "error")
          .mockImplementation(() => {});
        const infoMock = jest
          .spyOn(global.console, "info")
          .mockImplementation(() => {});
        const exitMock = jest
          .spyOn(global.process, "exit")
          .mockImplementation((() => {}) as any);

        await main();

        expect(errorMock).toHaveBeenCalledTimes(errorTimes);
        expect(infoMock).toHaveBeenCalledTimes(infoTimes);
        expect(exitMock).toHaveBeenCalledTimes(exitTimes);
      });
    }
  );
});
