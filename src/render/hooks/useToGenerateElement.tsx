import React, { createRef, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { addNewElementToWebState } from "../../common/helpers";
import { elementRefType, ToolItem } from "../../common/Tools";
import {
  websiteState,
  selectedElementState as elementedState,
  elementRefs,
} from "../../recoil";
import { renderElementType } from "../types";

const useToGenerateElement = () => {
  const setSelectedElement = useSetRecoilState(elementedState);
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const [webState, setWebState] = useRecoilState(websiteState);

  const onSelectTool = (tool: ToolItem) => {
    const completeWebState = addNewElementToWebState(webState, tool.element);
    setWebState(completeWebState);
    //addElement(tool.element);
  };

  const elementorSelector = (element: renderElementType) => {
    setSelectedElement(element);
  };

  const addElementRef = (id: string, el: elementRefType<HTMLElement>) => {
    const newElsRef = { ...allElementRefs };
    if (!newElsRef[id]) {
      newElsRef[id] = el;
    }

    setElementsRef({ ...newElsRef });
  };

  return {
    setSelectedElement: elementorSelector,
    onSelectTool,
    addElementRef,
  };
};

export default useToGenerateElement;
