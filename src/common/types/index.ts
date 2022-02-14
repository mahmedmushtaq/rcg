import { renderElementType } from "../../render/types";

export interface dynamicStyleType {
  [key: string]: string;
}

export interface webStateType {
  [key: string]: renderElementType;
}
