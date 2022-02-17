import { renderWebComponentType } from "../../render/types";

export interface dynamicStyleType {
  [key: string]: string;
}

// export interface webStateType {
//   [key: string]: renderWebComponentType;
// }

export interface newWebStateType {
   childrens: (string | newWebStateType)[];
   data: renderWebComponentType;
   id: string;
}
