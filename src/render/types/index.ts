import React from "react";
import { elementRefType } from "../../common/Tools";

export interface elementType {
  component: string;
  className?: string;
  style?: React.CSSProperties;
  id: string | number;
  onClick?: () => void;
  children?: elementType[] | string | string[];
  addElementRef?: (id: string | number, el: elementRefType<any>) => void;
}
