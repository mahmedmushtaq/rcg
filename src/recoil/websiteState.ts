import { atom, selector } from "recoil";
import { elementType } from "../render/types";
import { addNewElementToWebState } from "./helper";

const websiteState = atom<elementType>({
  key: "webState", // unique ID (with respect to other atoms/selectors)
  default: {
    component: "div",
    className: "",
    style: {},
    children: "",
    id: "default-div",
  }, // default value (aka initial value)
});

export const webState = selector<elementType>({
  key: "completeWebState",
  get: ({ get }) => get(websiteState),
  set: ({ set, get }, newElement) => {
    const webState = get(websiteState);
    set(
      websiteState,
      addNewElementToWebState(webState, newElement as elementType)
    );
  },
});
