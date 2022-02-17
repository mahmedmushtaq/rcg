import { atom, selector } from "recoil";
import { Tree, WebComponent } from "../common/helpers/tree";
import { webStateType } from "../common/types";
import { renderWebComponentType } from "../render/types";

export const websiteState = atom<webStateType>({
  key: "webState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const webState = atom<Tree>({
  key: "webComponentState",
  default: new Tree(),
});
