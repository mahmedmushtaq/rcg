import React from "react";
import { elementRefType } from "../../common/Tools";

export interface renderElementType {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  id: string | number;
  onClick?: () => void;
  children?: renderElementType[] | string | string[];
  addElementRef?: (id: string | number, el: elementRefType<any>) => void;
  parentId?: string | number;
}
