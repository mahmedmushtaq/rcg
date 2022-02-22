import React from "react";
import { parseStringFunc } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import { elementCompleteState } from "../../common/types";
import { renderWebComponentType } from "../types";

export const attachFunctions = (
  renderData: renderWebComponentType,
  config: elementCompleteState
) => {
  // first consider renderData which is coming from a state and if no data will present then consider treeState data
  const data = renderData || config.data;
  return {
    onClick: () => {
      if (data.onClick) data.onClick(config);
      //parseStringFunc(config.onClick as string)(config);
    },
    ref: (el: elementRefType<HTMLButtonElement>) => {
      // used to store reference in recoil state management
      if (data.addElementRef) {
        // const addElementRef = eval(config.addElementRef as string);
        data.addElementRef(config.id, el);
      }
    },
    onDragStart: (e: React.DragEvent) => {
      if (data.onDragStart) {
        data.onDragStart(e, config);
      }
    },

    onDragOver: (e: React.DragEvent) => {
      if (data.onDragOver) {
        data.onDragOver(e, config);
      }
    },

    onDrop: (e: React.DragEvent) => {
      if (data.onDrop) {
        data.onDrop(e, config);
      }
    },

    // attach new function
  };
};
