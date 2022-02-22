import { atom, selector } from "recoil";
import { defaultBodyValue } from "../common/enums";
import { elementCompleteState, treeStateType } from "../common/types";
import { renderWebComponentType } from "../render/types";

// export const websiteState = atom<webStateType>({
//   key: "webState", // unique ID (with respect to other atoms/selectors)
//   default: {}, // default value (aka initial value)
// });

export const treeState = atom<treeStateType>({
  key: "treeState",
  default: {
    ...defaultBodyValue,
  },
});

export const componentsData = atom<{ [key: string]: renderWebComponentType }>({
  key: "componentDataByKey",
  default: {},
});

// export const webState = atom<elementCompleteState | undefined>({
//   key: "webComponentState",
//   default: undefined,
// });
