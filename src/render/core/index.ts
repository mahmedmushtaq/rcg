import keyToComponentMap from "./keyToComponentMap";
import { renderElementType } from "../types";
import { createElement } from "react";
import { elementRefType } from "../../common/Tools";

export const elementList: { [key: string]: any } | undefined = {};

export const renderComponent: (
  config: renderElementType
) => React.ReactElement = (config: renderElementType) => {
  const { component, id, className, style, onClick, children } = config;

  return createElement(
    component,
    {
      key: id,
      className,
      style,
      onClick,
      ref: (el: elementRefType<HTMLButtonElement>) => {
        if (config.addElementRef) {
          config.addElementRef(id!, el);
        }
        //config.ref(id, el);
      },
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

  // elementList![`${id}`] = createElementName;
  // return createElementName;
};
