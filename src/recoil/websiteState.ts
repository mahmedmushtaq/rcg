import { atom } from "recoil";
import { renderType } from "../render/types";

export const websiteState = atom<renderType>({
  key: "webState", // unique ID (with respect to other atoms/selectors)
  default: {
    component: "div",
    className: "",
    style: {},
    children: "div world",
  }, // default value (aka initial value)
});

