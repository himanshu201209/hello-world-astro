export const styleVariantIsAny =
  (allowList: string[]) =>
  (value: string | undefined): boolean =>
    value != null && allowList.includes(value);
