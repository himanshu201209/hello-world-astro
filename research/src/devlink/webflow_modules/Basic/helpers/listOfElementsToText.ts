import type { ReactNode } from "react";

import { toText } from "../../ListOfElements/helpers/toText";

export const listOfElementsToText = (value: ReactNode | undefined): string =>
  toText(value) ?? "";
