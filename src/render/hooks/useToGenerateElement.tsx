import React, { createRef, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { elementRefType, ToolItem } from "../../common/Tools";
import {
  webState,
  selectedElementState as elementedState,
  elementRefs,
} from "../../recoil";
import { elementType } from "../types";

const useToGetRef = () => {
  return { ref: useRef() };
};

const useToGenerateElement = () => {
  const setSelectedElement = useSetRecoilState(elementedState);
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const addElement = useSetRecoilState(webState);

  const onSelectTool = (tool: ToolItem) => {
    addElement(tool.element);
  };

  const elementorSelector = (element: elementType) => {
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
