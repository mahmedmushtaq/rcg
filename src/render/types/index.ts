import React from "react";
import { elementRefType } from "../../common/Tools";
import { elementCompleteState } from "../../common/types";

type dragFunctionType = (e: React.DragEvent, el: elementCompleteState) => void;
type enterLeaveFunctionType = (
  e: React.MouseEventHandler,
  el: elementCompleteState
) => void;

export interface renderWebComponentFunctions {
  onClick?: (el: elementCompleteState) => void;
  addElementRef?: (id: string, el: elementRefType<HTMLElement>) => void;
  onDragStart?: dragFunctionType;
  onDragOver?: dragFunctionType;
  onDrop?: dragFunctionType;
  onMouseEnter?: enterLeaveFunctionType;
  onMouseLeave?: enterLeaveFunctionType;
}

export interface renderWebComponentType extends renderWebComponentFunctions {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  draggable?: boolean;
  child: string; // will contain simple text
  id: string;
  parentId: string;
  isHovered?: boolean;
  activateDAND?: boolean; //in order to activate drag and drop listener
}
