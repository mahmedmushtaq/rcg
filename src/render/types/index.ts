import React from "react";
import { elementRefType } from "../../common/Tools";

export interface IRenderElementAttachFunctions {
  onClick?: (el: renderElementType) => void;
  addElementRef?: (id: string, el: elementRefType<HTMLElement>) => void;
  onDragStart?: (e: React.DragEvent, el: renderElementType) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent, parentEl: renderElementType) => void;
}

export interface renderElementType extends IRenderElementAttachFunctions {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  id: string;
  children?: renderElementType[] | string | string[];
  parentId?: string;
}
