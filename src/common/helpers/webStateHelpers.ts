import { renderElementType } from "../../render/types";
import { webStateType } from "../types";

const defaultWebState = {
  component: "div",
  className: "",
  style: {},
  id: "defaultParent",
  children: "",
};

const keyMap: {
  [key: string | number]: {
    data: renderElementType;
    childrens: (string | number)[];
  };
} = {
  default: { data: defaultWebState, childrens: [] },
};

export const addNewElementToWebState = (
  completeWebState: webStateType,
  element: renderElementType
) => {
  // defaultId ( change it later )
  element.parentId = element.parentId || "default";
  if (!keyMap[element.id]) {
    keyMap[element.id] = { data: element, childrens: [] };
  }

  const keyMapValue = keyMap[element.parentId];

  keyMap[`${element.parentId}`] = {
    ...keyMapValue,
    childrens: [...keyMapValue.childrens, element.id],
  };

  const webState = { ...completeWebState };

  for (let key in keyMap) {
    const { data, childrens } = keyMap[key];
    if (childrens.length > 0) {
      webState[key] = {
        ...data,
        children: [...childrens.map((item) => keyMap[item].data)],
      };
    }
  }

  console.log("construct obj is ", webState);

  return webState;
};
