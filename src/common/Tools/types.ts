import React from "react";
import { Icon } from "react-feather";
import { elementType } from "../../render/types";

type customIconType = () => JSX.Element;

export interface ToolItem {
  icon: customIconType | Icon;
  heading: string;
  element: elementType;
}

export type elementRefType<T> = T;
