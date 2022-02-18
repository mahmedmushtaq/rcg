import { renderWebComponentType } from "../../render/types";
import { newWebStateType, treeStateType } from "../types";
import { treeUtilities } from "../dsa/objTreeUtilities";

export const addNewElementToWebState = async (
  allTreeState: treeStateType,
  element: renderWebComponentType
) => {
  // tree.add(
  //   new WebComponent(element.id, { ...element }, [element.child]),
  //   element.parentId
  // );
  // return {...deepcopy(tree.rootNode())}

  const { addComponentToTree } = await treeUtilities(allTreeState);
  const newTreeState = await addComponentToTree(
    { id: element.id, childrens: [element.child], data: { ...element } },
    element.parentId
  );

  return { ...newTreeState };
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
