import { renderWebComponentType } from "../../render/types";

export interface dynamicStyleType {
  [key: string]: string;
}

export interface elementCompleteState {
  childrens: (string | elementCompleteState)[];
  data: renderWebComponentType;
  id: string;
}

export interface treeStateType {
  [key: string]: elementCompleteState;
}
