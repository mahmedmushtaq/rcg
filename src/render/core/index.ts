import { createElement } from "react";
import { attachFunctions } from "./attachFunctions";
import { elementCompleteState } from "../../common/types";
import { renderWebComponentType } from "../types";

export const elementList: { [key: string]: any } | undefined = {};

type allComponentsDataType = { [key: string]: renderWebComponentType };

type renderComponentFuncType = (
  webState: elementCompleteState,
  allComponentsData: allComponentsDataType,
  currentSelectedItem?: renderWebComponentType
) => React.ReactElement;

export const renderComponent: renderComponentFuncType = (
  webState: elementCompleteState,
  allComponentsData: allComponentsDataType,
  currentSelectedItem?: renderWebComponentType
) => {
  // get component data from state
  const stateData = allComponentsData[webState.id];

  let config = webState.data;

  if (currentSelectedItem && currentSelectedItem.id === webState.id) {
    // no get data from current selectedItem
    config = currentSelectedItem;
  } else if (Object.keys(stateData || {}).length > 0) {
    config = stateData;
  }

  return createElement(
    config.component,
    {
      key: config.id + "-" + config.parentId,
      id: config.id + "-" + config.parentId,
      className: config.className,
      style: config.style,
      draggable: config.draggable,
      ...attachFunctions(config, webState),
    },
    webState.childrens?.map((child) => {
      if (typeof child === "string") {
        // here I assumed, string child mean text
        return config.child;
      }
      return renderComponent(child, allComponentsData, currentSelectedItem);
    })
  );
};
