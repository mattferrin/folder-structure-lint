/* eslint-disable functional/functional-parameters */
import { openConfig } from "./openConfig";
import { processConfig } from "./processConfig";

export type Exit =
  | { readonly tag: "exit-and-pass" }
  | { readonly tag: "exit-and-fail"; readonly message: string };

export type CheckedConfig = {
  readonly root: string;
  readonly rules: ReadonlyArray<string>;
};

export async function execute(): Promise<Exit> {
  const openedConfig = await openConfig();
  switch (openedConfig.tag) {
    case "open-success":
      return processConfig(openedConfig);
    case "open-error":
      return { tag: "exit-and-fail" as const, message: openedConfig.message };
  }
}
