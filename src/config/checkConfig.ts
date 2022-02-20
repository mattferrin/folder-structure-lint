import { checkConfigKeys } from "./checkConfigKeys";
import { reportConfigValidity } from "./reportConfigValidity";

export type ValidConfig = {
  readonly tag: "valid-config";
  readonly hasRoot: boolean;
  readonly hasRules: boolean;
};
export type InvalidConfig = {
  readonly tag: "invalid-config";
  readonly message: string;
};
export type Validation = ValidConfig | InvalidConfig;

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/ban-types
export function checkConfig(config: Object): Validation {
  const result = checkConfigKeys(config);

  return reportConfigValidity(result);
}
