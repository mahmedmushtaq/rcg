import keyToComponentMap from "./keyToComponentMap";
import { renderElementType } from "../types";
import { createElement } from "react";
import { elementRefType } from "../../common/Tools";
import { attachFunctions } from "./attachFunctions";

export const elementList: { [key: string]: any } | undefined = {};

export const renderComponent: (
  config: renderElementType
) => React.ReactElement = (config: renderElementType) => {
  const { component, id, className, style, children } = config;

  return createElement(
    component,
    {
      key: id,
      className,
      style,
      ...attachFunctions(config),
    },
    children
      ? typeof children === "string"
        ? children
        : children.map((child) => {
            if (typeof child === "string") {
              return child;
            }
            return renderComponent(child);
          })
      : undefined
  );
};
