import { atom } from "recoil";
import { renderType } from "../render/types";

export const elementedState = atom<renderType | undefined>({
  key: "selectedElement",
  default: undefined,
});
