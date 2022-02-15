import { atom, selector } from "recoil";
import { webStateType } from "../common/types";
import { renderElementType } from "../render/types";

export const websiteState = atom<webStateType>({
  key: "webState", // unique ID (with respect to other atoms/selectors)
  default: {
    default: {
      component: "div",
      id: "default",
    },
  }, // default value (aka initial value)
});
