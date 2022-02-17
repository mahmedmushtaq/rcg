import { createElement } from "react";
import { attachFunctions } from "./attachFunctions";
import { WebComponent } from "../../common/helpers/tree";

export const elementList: { [key: string]: any } | undefined = {};

export const renderComponent: (config: WebComponent) => React.ReactElement = (
  config: WebComponent
) => {
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

// export const renderComponent: (
//   config: renderElementType
// ) => React.ReactElement = (config: renderElementType) => {
//   const { component, id, className, style, children, draggable } = config;

//   return createElement(
//     component,
//     {
//       key: id,
//       className,
//       style,
//       draggable,
//       ...attachFunctions(config),
//     },
//     children
//       ? typeof children === "string"
//         ? children
//         : children.map((child) => {
//             if (typeof child === "string") {
//               return child;
//             }
//             return renderComponent(child);
//           })
//       : undefined
//   );
// };
