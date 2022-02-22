import { createElement } from "react";
import { attachFunctions } from "./attachFunctions";
import { newWebStateType } from "../../common/types";
import { renderWebComponentType } from "../types";

export const elementList: { [key: string]: any } | undefined = {};

type allComponentsDataType = { [key: string]: renderWebComponentType };

// export const renderComponent: (
//   config: newWebStateType,
//   allComponentsData: allComponentsDataType
// ) => React.ReactElement = (
//   config: newWebStateType,
//   allComponentsData: allComponentsDataType
// ) => {
//   // const { component, id, className, style, children, draggable } = config;
//   console.log("render is ", config);

//   return createElement(
//     config.data.component,
//     {
//       key: config.id,
//       id: config.id,
//       className: config.data.className,
//       style: config.data.style,
//       draggable: config.data.draggable,
//       ...attachFunctions(config),
//     },
//     config.childrens?.map((child) => {
//       if (typeof child === "string") {
//         return child;
//       }
//       return renderComponent(child, allComponentsData);
//     })
//   );
// };

// export const elementList: { [key: string]: any } | undefined = {};

export const renderComponent: (
  webState: newWebStateType,
  allComponentsData: allComponentsDataType
) => React.ReactElement = (
  webState: newWebStateType,
  allComponentsData: allComponentsDataType
) => {
  // const { component, id, className, style, children, draggable } = config;

  const componentDataFromAllComponentsData = allComponentsData[webState.id];

  const config =
    Object.keys(componentDataFromAllComponentsData || {}).length > 0
      ? componentDataFromAllComponentsData
      : webState.data;

  console.log("config is ", config);

  return createElement(
    config.component,
    {
      key: config.id,
      id: config.id,
      className: config.className,
      style: config.style,
      draggable: config.draggable,
      ...attachFunctions(config, webState),
    },
    webState.childrens?.map((child) => {
      if (typeof child === "string") {
        return child;
      }
      return renderComponent(child, allComponentsData);
    })
  );
};
