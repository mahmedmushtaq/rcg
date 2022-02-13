import { elementType } from "../render/types";

const defaultWebState = {
  component: "div",
  className: "",
  style: {},
  children: "",
};

export const addNewElementToWebState = (
  webState: elementType,
  element: elementType
) => {
  // const localWebState =
  //   localStorage.getItem("websiteState") || JSON.stringify(defaultWebState);

  // const webState = JSON.parse(localWebState);
  const allElementsMap = { ...webState };
  const { children } = allElementsMap;
  type unionType = elementType | string;
  if (children) {
    let childArray: unionType[] = [];
    if (!Array.isArray(children)) {
      // children is not array, mean simple string
      childArray = [allElementsMap.children! as unionType];
    } else {
      // children is an array either renderType[] or string[]
      childArray = [...(allElementsMap.children as unionType[])];
    }
    (allElementsMap.children as unionType[]) = [...childArray, element];
  } else {
    allElementsMap.children = [element];
  }

  return { ...allElementsMap };
};
