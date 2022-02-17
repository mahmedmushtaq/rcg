import { renderWebComponentType } from "../../render/types";
import { webStateType } from "../types";
import { Tree, WebComponent as Component, WebComponent } from "./tree";

const defaultWebState = {
  component: "div",
  className: "",
  style: {},
  id: "defaultParent",
  children: "",
};

type unionType = renderWebComponentType | string;

// const addElementIntoParentChildren = (
//   children: renderElementType["children"],
//   element: renderElementType
// ) => {
//   let childArray: unionType[] = [];
//   if (children) {
//     if (!Array.isArray(children)) {
//       // children is not array, mean simple string
//       childArray = [children! as unionType];
//     } else {
//       // children is an array either renderType[] or string[]
//       childArray = [...(children as unionType[])];
//     }
//     // add new child with previous one
//     (childArray as unionType[]) = [...childArray, element];
//   } else {
//     // first new child
//     childArray = [element];
//   }

//   return childArray;
// };

/**
 *
 * <div id=1> <button id=2> from button </button> <a href="" id=3>
 * from anchor tag </a> < button id=4> < a id=5> Button root whose root is id 1 and anchor tag whose root is id 4
 *
 *
 *
 */

const letstry: any = {};

export const dummyTraverseTree = () => {
  const tree = new Tree();
  const parentComponent = new Component("1", { component: "div" });
  const button = new Component("2", { component: "button" }, ["from button"]);
  const aTag = new Component("3", { component: "a" }, ["from anchor tag"]);
  const parentBtn = new Component("4", { component: "button" });
  const aChild = new Component("5", { component: "a" }, [
    "Button root whose root is id 1 and anchor tag whose root is id 4",
  ]);

  const p = new Component("6", { component: "h1", className: "text-4xl" }, [
    "Hello from h1 world",
  ]);

  letstry["6"] = p;

  tree.add(parentComponent, "1");
  tree.add(button, "1");
  tree.add(aTag, "1");
  tree.add(parentBtn, "1");
  tree.add(aChild, "4");
  tree.add(p, "4");

  console.log(letstry);

  // setTimeout(() => {
  //   console.log(" ============ timeout ================ ");
  //   letstry["6"].childrens = ["dynamic"]; //data.style = { backgroundColor: "red" };
  //   console.log(tree.rootNode());
  // }, 5000);

  return tree.rootNode();
};

export const addNewElementToWebState = (
  completeWebState: Tree,
  element: renderWebComponentType
) => {
  const tree = completeWebState;

  // element.parentId = element.parentId || "body";

  // const webState = { ...completeWebState };

  // const webStateElValue = webState[element.parentId];
  // if (webStateElValue) {
  //   const { children } = webStateElValue;

  //   const allChildrens = addElementIntoParentChildren(children, element);

  //   webState[element.parentId] = {
  //     ...webStateElValue,
  //     //@ts-ignore
  //     children: allChildrens,
  //   };
  // } else {
  //   webState[element.parentId] = {
  //     ...element,
  //     children: [element],
  //   };
  // }
  return completeWebState;
};

export const onStartDraggingElement = (
  webState: webStateType,
  el: renderWebComponentType
) => {
  // remove element from webState
  // const completeWebState = { ...webState };

  // console.log("completeWebState ", completeWebState);

  // const parentKeyValue = completeWebState[el.parentId!];

  // const removeChild = (parentKeyValue.children as unionType[])?.filter(
  //   (item) => {
  //     if (typeof item === "string") {
  //       return item;
  //     }
  //     return item.id !== el.id;
  //   }
  // );

  // completeWebState[el.parentId!] = {
  //   ...parentKeyValue,
  //   //@ts-ignore
  //   children: removeChild,
  // };

  return webState;
};

export const onDropElement = (
  webState: webStateType,
  el: renderWebComponentType
) => {
  // return addNewElementToWebState(webState, el);
};
