import { checkConfig } from "./checkConfig";
import { checkedConfigResult } from "./checkedConfigResult";
import { CheckedConfig, Exit } from "./execute";
import { OpenSuccess } from "./openConfig";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export async function processConfig(openedConfig: OpenSuccess): Promise<Exit> {
  const checkedConfig = checkConfig(openedConfig.result);
  const configChecked: CheckedConfig = openedConfig.result as CheckedConfig;

  return checkedConfigResult(checkedConfig, configChecked);
}
