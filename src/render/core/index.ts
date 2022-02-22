import { createElement } from "react";
import { attachFunctions } from "./attachFunctions";
import { elementCompleteState } from "../../common/types";
import { renderWebComponentType } from "../types";

export const elementList: { [key: string]: any } | undefined = {};

type allComponentsDataType = { [key: string]: renderWebComponentType };

export const renderComponent: (
  webState: elementCompleteState,
  allComponentsData: allComponentsDataType
) => React.ReactElement = (
  webState: elementCompleteState,
  allComponentsData: allComponentsDataType
) => {
  // get component data from state
  const componentDataFromAllComponentsData = allComponentsData[webState.id];

  // then if no component data is present in a state then considered the data which is present in default treeState
  const config =
    Object.keys(componentDataFromAllComponentsData || {}).length > 0
      ? componentDataFromAllComponentsData
      : webState.data;

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
