import { atom, selector } from "recoil";
import { newWebStateType, treeStateType } from "../common/types";
import { renderWebComponentType } from "../render/types";

// export const websiteState = atom<webStateType>({
//   key: "webState", // unique ID (with respect to other atoms/selectors)
//   default: {}, // default value (aka initial value)
// });

export const treeState = atom<treeStateType>({
  key: "treeState",
  default: {
    body: {
      childrens: [],
      id: "body",
      data: {
        component: "div",
        id: "body",
        parentId: "parent",
        child: "",
      },
    },
  },
});

export const webState = atom<newWebStateType | undefined>({
  key: "webComponentState",
  default: undefined,
});
