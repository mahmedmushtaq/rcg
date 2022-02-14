import React from "react";
import { Icon } from "react-feather";
import { renderElementType } from "../../render/types";

type customIconType = () => JSX.Element;

export interface ToolItem {
  icon: customIconType | Icon;
  heading: string;
  element: renderElementType;
}

export type elementRefType<T> = T;
