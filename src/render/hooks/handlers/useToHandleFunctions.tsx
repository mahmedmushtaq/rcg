import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onDropElement } from "../../../common/helpers";
import { elementRefType } from "../../../common/Tools";
import { elementCompleteState } from "../../../common/types";
import {
  componentsData,
  elementRefs,
  selectedElementState,
  treeState,
} from "../../../recoil";
import { renderWebComponentType } from "../../types";
import useToHandleDragAndDrop from "./useToHandleDragAndDrop";
import useToHandlerMouseEnterOrLeave from "./useToHandleMouseEnterOrLeave";

const useToHandleFunctions = () => {
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const setSelectedElement = useSetRecoilState(selectedElementState);
  const dragAndDropsFunctionsList = useToHandleDragAndDrop();
  const mouseEnterAndLeaveFunctionsList = useToHandlerMouseEnterOrLeave();

  const addElementRef = (
    id: string,
    refElement: elementRefType<HTMLElement>
  ) => {
    const newElsRef = { ...allElementRefs };
    newElsRef[id] = refElement;
    setElementsRef({ ...newElsRef });
  };
  

  const onClick = (completeElState: elementCompleteState) => {
    console.log("onClick occured ", completeElState);
    setSelectedElement(completeElState.data);
  };

  return {
    onClick,
    addElementRef,
    ...dragAndDropsFunctionsList,
    ...mouseEnterAndLeaveFunctionsList,
  };
};

export default useToHandleFunctions;
