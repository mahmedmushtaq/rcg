import { renderWebComponentType } from "../../render/types";
import { newWebStateType, treeStateType } from "../types";
import { TreeOperations } from "../dsa/objTreeUtilities";

const elFormatToWebStateTypeFormat = (el: renderWebComponentType) => {
  return { id: el.id, childrens: [el.child], data: { ...el } };
};

export const addNewElementToWebState = async (
  allTreeState: treeStateType,
  element: renderWebComponentType
) => {
  // tree.add(
  //   new WebComponent(element.id, { ...element }, [element.child]),
  //   element.parentId
  // );
  // return {...deepcopy(tree.rootNode())}

  const treeOperations = new TreeOperations(allTreeState);

  const newTreeState = await treeOperations.addComponentToTree(
    elFormatToWebStateTypeFormat(element),
    element.parentId
  );

  console.log(" =========== new tree state is ========== ", newTreeState);

  return { ...newTreeState };
};

export const onStartDraggingElement = (
  allTreeState: treeStateType,
  el: renderWebComponentType
) => {
  // remove element from webState
  const completeTreeStateType = { ...allTreeState };
};

export const onDropElement = async (
  allTreeState: treeStateType,
  el: newWebStateType,
  newParentId: string
) => {
  const operations = new TreeOperations(allTreeState);

  const newTreeState = await operations.updateComponentMap(el, {
    newParentId,
    componentNewId: Math.random() + "",
  });

  return newTreeState;
};
