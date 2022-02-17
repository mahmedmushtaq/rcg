import { renderElementType } from "../../render/types";
import { webStateType } from "../types";
import { Tree, Component } from "./tree";

const defaultWebState = {
  component: "div",
  className: "",
  style: {},
  id: "defaultParent",
  children: "",
};

type unionType = renderElementType | string;

const addElementIntoParentChildren = (
  children: renderElementType["children"],
  element: renderElementType
) => {
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

  return childArray;
};

/**
 *
 * <div id=1> <button id=2> from button </button> <a href="" id=3>
 * from anchor tag </a> < button id=4> < a id=5> Button root whose root is id 1 and anchor tag whose root is id 4
 *
 *
 *
 */

export const dummyTraverseTree = () => {
  const tree = new Tree();
  tree.add(new Component("1", { component: "div", id: "1" }), "1");
  tree.add(
    new Component("2", { component: "button", id: "1" }, ["from button"]),
    "1"
  );
  tree.add(
    new Component("3", { component: "a", id: "1" }, ["from anchor tag"]),
    "1"
  );
  tree.add(new Component("4", { component: "button", id: "1" }), "1");
  tree.add(
    new Component("5", { component: "a", id: "1" }, [
      "Button root whose root is id 1 and anchor tag whose root is id 4",
    ]),
    "4"
  );

  return tree.rootNode();
};

export const addNewElementToWebState = (
  completeWebState: webStateType,
  element: renderElementType
) => {
  element.parentId = element.parentId || "body";

  const webState = { ...completeWebState };

  const webStateElValue = webState[element.parentId];
  if (webStateElValue) {
    const { children } = webStateElValue;

    const allChildrens = addElementIntoParentChildren(children, element);

    webState[element.parentId] = {
      ...webStateElValue,
      //@ts-ignore
      children: allChildrens,
    };
  } else {
    webState[element.parentId] = {
      ...element,
      children: [element],
    };
  }
  return webState;
};

export const onStartDraggingElement = (
  webState: webStateType,
  el: renderElementType
) => {
  // remove element from webState
  const completeWebState = { ...webState };

  console.log("completeWebState ", completeWebState);

  const parentKeyValue = completeWebState[el.parentId!];

  const removeChild = (parentKeyValue.children as unionType[])?.filter(
    (item) => {
      if (typeof item === "string") {
        return item;
      }
      return item.id !== el.id;
    }
  );

  completeWebState[el.parentId!] = {
    ...parentKeyValue,
    //@ts-ignore
    children: removeChild,
  };

  return webState;
};

export const onDropElement = (
  webState: webStateType,
  el: renderElementType
) => {
  return addNewElementToWebState(webState, el);
};
