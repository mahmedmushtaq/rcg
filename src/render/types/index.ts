import React from "react";
import { elementRefType } from "../../common/Tools";

type dragFunctionType =
  | ((e: React.DragEvent, el: renderWebComponentType) => void)
  | string;

export interface IRenderElementAttachFunctions {
  onClick?: ((el: renderWebComponentType) => void) | string;
  addElementRef?:
    | ((id: string, el: elementRefType<HTMLElement>) => void)
    | string;
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
