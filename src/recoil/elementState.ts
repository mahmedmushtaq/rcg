import React from "react";
import { atom } from "recoil";
import { elementRefType } from "../common/Tools";
import { renderElementType } from "../render/types";

export const selectedElementState = atom<renderElementType | undefined>({
  key: "selectedElement",
  default: undefined,
});

export const elementRefs = atom<{
  [key: string]: elementRefType<HTMLElement>;
}>({
  key: "elementsRef",
  default: {},
});
