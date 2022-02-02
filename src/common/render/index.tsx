import keyToComponentMap from "./keyToComponentMap";
import { renderType } from "./types";
import { createElement } from "react";

export const renderComponent: (config: renderType) => React.ReactElement = (
  config: renderType
) => {
  return createElement(
    config.component,
    {
      key: config.id,
      className: config.className,
      style: config.style,
    },
    config.children && typeof config.children === "string"
      ? config.children
      : (config.children as renderType[]).map((child) => renderComponent(child))
  );
};
