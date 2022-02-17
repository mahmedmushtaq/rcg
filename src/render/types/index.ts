import React from "react";
import { elementRefType } from "../../common/Tools";

type dragFunctionType = (e: React.DragEvent, el: renderElementType) => void;

export interface IRenderElementAttachFunctions {
  onClick?: (el: renderElementType) => void;
  addElementRef?: (id: string, el: elementRefType<HTMLElement>) => void;
  onDragStart?: dragFunctionType;
  onDragOver?: dragFunctionType;
  onDrop?: dragFunctionType;
}

export interface renderElementType extends IRenderElementAttachFunctions {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  id: string;
  children?: renderElementType[] | string | string[];
  parentId?: string;
  draggable?: boolean;
}
