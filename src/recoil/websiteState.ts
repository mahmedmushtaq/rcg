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

// export const webState = selector<webStateType>({
//   key: "completeWebState",
//   get: ({ get }) => get(websiteState),
//   // set: ({ set, get }, newElement) => {
//   //   const webState = get(websiteState);
//   //   set(websiteState, addNewElementToWebState(webState, newElement as renderElementType));
//   // },
// });
