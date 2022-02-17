import React from "react";
import { elementRefType } from "../../common/Tools";

type dragFunctionType = (e: React.DragEvent, el: renderWebComponentType) => void;

export interface IRenderElementAttachFunctions {
  onClick?: (el: renderWebComponentType) => void;
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
  //  id: string;
  //children?: renderElementType[] | string | string[];
  // parentId?: string;
}

// export interface renderWebComponentType extends IRenderElementAttachFunctions {
//   component: string;
//   className?: string;
//   style?: React.CSSProperties;
//   draggable?: boolean;
// }
