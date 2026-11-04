export const equals =
  (expected: boolean) =>
  (actual: boolean | undefined): boolean =>
    actual != null && actual === expected;
