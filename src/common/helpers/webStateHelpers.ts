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
  element.parentId = element.parentId || "default";
  const webState = { ...completeWebState };
  if (!webState[element.id]) {
    webState[element.id] = { ...element, children: [] };
  }

  const webStateElValue = webState[element.parentId];

  const { children } = webStateElValue;
  type unionType = renderElementType | string;
  let childArray: unionType[] = [];
  if (children) {
    if (!Array.isArray(children)) {
      // children is not array, mean simple string
      childArray = [children! as unionType];
    } else {
      // children is an array either renderType[] or string[]
      childArray = [...(children as unionType[])];
    }
    // add new child with previous one
    (childArray as unionType[]) = [...childArray, element];
  } else {
    // first new child
    childArray = [element];
  }

  webState[element.parentId] = {
    ...webStateElValue,
    //@ts-ignore
    children: childArray,
  };

  // let childrenValue: (string | renderElementType)[] = [];

  // if (webStateElValue.children) {
  //   if (typeof webStateElValue.children === "string") {
  //     childrenValue = [webStateElValue.children];
  //   }

  //   childrenValue = [...webStateElValue.children];
  // }

  // webState[`${element.parentId}`] = {
  //   ...webStateElValue,
  //   children: [...webStateElValue.children, element],
  // };

  // for (let key in keyMap) {
  //   const { data, childrens } = keyMap[key];
  //   if (childrens.length > 0) {
  //     webState[key] = {
  //       ...data,
  //       children: [...childrens.map((item) => keyMap[item].data)],
  //     };
  //   }
  // }

  console.log("construct obj is ", webState);

  return webState;
};

const elementStartDragging = () => {
  // remove
};
