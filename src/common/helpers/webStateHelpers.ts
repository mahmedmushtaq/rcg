import { renderWebComponentType } from "../../render/types";
import { newWebStateType } from "../types";
import tree, {
  Tree,
  WebComponent as Component,
  WebComponent,
} from "../dsa/tree";

// export const dummyTraverseTree = () => {
//   const tree = new Tree();
//   const parentComponent = new Component("1", { component: "div" });
//   const button = new Component("2", { component: "button" }, ["from button"]);
//   const aTag = new Component("3", { component: "a" }, ["from anchor tag"]);
//   const parentBtn = new Component("4", { component: "button" });
//   const aChild = new Component("5", { component: "a" }, [
//     "Button root whose root is id 1 and anchor tag whose root is id 4",
//   ]);

//   const p = new Component("6", { component: "h1", className: "text-4xl" }, [
//     "Hello from h1 world",
//   ]);

//   letstry["6"] = p;

//   tree.add(parentComponent, "1");
//   tree.add(button, "1");
//   tree.add(aTag, "1");
//   tree.add(parentBtn, "1");
//   tree.add(aChild, "4");
//   tree.add(p, "4");

//   console.log(letstry);

//   // setTimeout(() => {
//   //   console.log(" ============ timeout ================ ");
//   //   letstry["6"].childrens = ["dynamic"]; //data.style = { backgroundColor: "red" };
//   //   console.log(tree.rootNode());
//   // }, 5000);

//   return tree.rootNode();
// };

export const addNewElementToWebState: (
  el: renderWebComponentType
) => newWebStateType = (element: renderWebComponentType) => {
  console.log("new Element is ", element);
  tree.add(
    new WebComponent(element.id, { ...element }, [element.child]),
    element.parentId
  );

  // console.log(
  //   "tree is =========== ",
  //   tree.rootNode(),
  //   JSON.stringify(tree.rootNode())
  // );

  console.log({ ...tree.rootNode() });

  return { ...tree.rootNode() };
};

export const onStartDraggingElement = (
  webState: newWebStateType,
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
  webState: newWebStateType,
  el: renderWebComponentType
) => {
  // return addNewElementToWebState(webState, el);
};
