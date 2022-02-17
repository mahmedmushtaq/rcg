import React from "react";
import { atom } from "recoil";
import { elementRefType } from "../common/Tools";
import { renderWebComponentType } from "../render/types";

export const selectedElementState = atom<renderWebComponentType | undefined>({
  key: "selectedElement",
  default: undefined,
});

export const elementRefs = atom<{
  [key: string]: elementRefType<HTMLElement>;
}>({
  key: "elementsRef",
  default: {},
});
