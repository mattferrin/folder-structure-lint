/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */

import { buildReadConfigFileCallback } from "./buildReadConfigFileCallback";
import { message } from "./readConfigFile";

describe.each([
  [
    "has error",
    "0e00d9e5-2c32-4d77-9a3e-db3869995888",
    null,
    {
      tag: "open-error",
      message,
    },
  ],
  [
    "missing data",
    null,
    null,
    {
      tag: "open-error",
      message,
    },
  ],
  [
    "has data",
    false,
    '{"dc706093-c836-4236-954f-9e3a9ac8fcdf":"81e846e6-354d-4ba4-bff7-6210811f877f"}',
    {
      tag: "open-success",
      result: {
        "dc706093-c836-4236-954f-9e3a9ac8fcdf":
          "81e846e6-354d-4ba4-bff7-6210811f877f",
      },
    },
  ],
])("buildReadConfigFileCallback", (testName, err, data, resultExpected) => {
  test(testName, () => {
    const accept = jest.fn();
    const readConfigFileCallback = buildReadConfigFileCallback(accept);
    readConfigFileCallback(err, data);

    expect(accept).toBeCalledTimes(1);
    expect(accept).toBeCalledWith(resultExpected);
  });
});
