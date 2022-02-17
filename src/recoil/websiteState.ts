import { atom, selector } from "recoil";
import { Tree, WebComponent } from "../common/dsa/tree";
import { newWebStateType } from "../common/types";
import { renderWebComponentType } from "../render/types";

// export const websiteState = atom<webStateType>({
//   key: "webState", // unique ID (with respect to other atoms/selectors)
//   default: {}, // default value (aka initial value)
// });

export const webState = atom<newWebStateType | undefined>({
  key: "webComponentState",
  default: undefined,
});
