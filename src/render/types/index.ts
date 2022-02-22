import React from "react";
import { elementRefType } from "../../common/Tools";
import { elementCompleteState } from "../../common/types";

type dragFunctionType = (e: React.DragEvent, el: elementCompleteState) => void;

export interface IRenderElementAttachFunctions {
  onClick?: (el: elementCompleteState) => void;
  addElementRef?: (id: string, el: elementRefType<HTMLElement>) => void;
  onDragStart?: dragFunctionType;
  onDragOver?: dragFunctionType;
  onDrop?: dragFunctionType;
}

export interface renderWebComponentType extends IRenderElementAttachFunctions {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  draggable?: boolean;
  child: string; // will contain simple text
  id: string;
  parentId: string;
}
