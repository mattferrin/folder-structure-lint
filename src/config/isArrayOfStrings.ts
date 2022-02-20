export function isArrayOfStrings(value: readonly unknown[]) {
  return (
    value.length !== 0 &&
    value.every((rule: unknown) => {
      return typeof rule === "string";
    })
  );
}
