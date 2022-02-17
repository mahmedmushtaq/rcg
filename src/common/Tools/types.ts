import React from "react";
import { Icon } from "react-feather";
import { renderWebComponentType } from "../../render/types";

type customIconType = () => JSX.Element;

export interface ToolItem {
  icon: customIconType | Icon;
  heading: string;
  element: renderWebComponentType;
}

export type elementRefType<T> = T;
