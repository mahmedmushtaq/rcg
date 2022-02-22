import { renderWebComponentType } from "../../render/types";
import { elementCompleteState, treeStateType } from "../types";
import { TreeOperations } from "../dsa/StateTreeOperations";

const elFormatToWebStateTypeFormat = (el: renderWebComponentType) => {
  return { id: el.id, childrens: [el.child], data: { ...el } };
};

export const addNewElementToWebState = async (
  allTreeState: treeStateType,
  element: renderWebComponentType
) => {
  const treeOperations = new TreeOperations(allTreeState);

  const newTreeState = await treeOperations.addComponentToTree(
    elFormatToWebStateTypeFormat(element),
    element.parentId
  );

  return { ...newTreeState };
};

export const onDropElement = async (
  allTreeState: treeStateType,
  el: elementCompleteState,
  newParentId: string
) => {
  const operations = new TreeOperations(allTreeState);

  const newTreeState = await operations.updateComponentMap(el, newParentId);

  return newTreeState;
};
