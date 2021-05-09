type Validation =
  | { tag: "valid-config"; hasRoot: boolean; hasRules: boolean }
  | { tag: "invalid-config"; message: string };

export function checkConfigType(config: Object): Validation {
  const result = Object.entries(config).reduce<Validation>(
    (previousValue, [key, value]) => {
      switch (previousValue.tag) {
        case "invalid-config":
          return previousValue;
        case "valid-config":
          switch (key) {
            case "root":
              if (typeof value !== "string") {
                return {
                  tag: "invalid-config",
                  message: "The `root` must be a string",
                };
              } else {
                return {
                  ...previousValue,
                  hasRoot: true,
                };
              }
            case "rules":
              if (
                typeof value?.every !== "function" ||
                value.length === 0 ||
                !value.every((rule: any) => {
                  return typeof rule === "string";
                })
              ) {
                return {
                  tag: "invalid-config",
                  message: "The `rule` must be a non-empty array of strings",
                };
              } else {
                return {
                  ...previousValue,
                  hasRules: true,
                };
              }
            default:
              return {
                tag: "invalid-config",
                message: `The key "${key}" is not recognized`,
              };
          }
      }
    },
    { tag: "valid-config", hasRoot: false, hasRules: false }
  );

  switch (result.tag) {
    case "invalid-config":
      return result;
    case "valid-config":
      if (!result.hasRoot) {
        return {
          tag: "invalid-config",
          message: `The "root" is missing from the config file`,
        };
      } else if (!result.hasRules) {
        return {
          tag: "invalid-config",
          message: `The "rules" are missing from the config file`,
        };
      } else {
        return result;
      }
  }
}
