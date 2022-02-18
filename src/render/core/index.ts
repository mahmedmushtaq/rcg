import { createElement } from "react";
import { attachFunctions } from "./attachFunctions";
import { newWebStateType } from "../../common/types";

export const elementList: { [key: string]: any } | undefined = {};

export const renderComponent: (
  config: newWebStateType
) => React.ReactElement = (config: newWebStateType) => {
  // const { component, id, className, style, children, draggable } = config;
  console.log("render is ", config);

  return createElement(
    config.data.component,
    {
      key: config.id,
      className: config.data.className,
      style: config.data.style,
      draggable: config.data.draggable,
      ...attachFunctions(config.data),
    },
    config.childrens?.map((child) => {
      if (typeof child === "string") {
        return child;
      }
      return renderComponent(child);
    })
  );
};
