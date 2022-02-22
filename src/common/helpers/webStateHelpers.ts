import { renderWebComponentType } from "../../render/types";
import { newWebStateType, treeStateType } from "../types";
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
  idsData: {
    newParentId: string;
    componentNewId: string;
  }
) => {
  const operations = new TreeOperations(allTreeState);

  const newTreeState = await operations.updateComponentMap(el, idsData);

  return newTreeState;
};
