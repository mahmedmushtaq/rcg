import { atom, selector } from "recoil";
import { renderType } from "../render/types";
import { addNewElementToWebState } from "./helper";

const websiteState = atom<renderType>({
  key: "webState", // unique ID (with respect to other atoms/selectors)
  default: {
    component: "div",
    className: "",
    style: {},
    children: "",
  }, // default value (aka initial value)
});

export const webState = selector<renderType>({
  key: "completeWebState",
  get: ({ get }) => get(websiteState),
  set: ({ set, get }, newElement) => {
    const webState = get(websiteState);
    set(
      websiteState,
      addNewElementToWebState(webState, newElement as renderType)
    );
  },
});
