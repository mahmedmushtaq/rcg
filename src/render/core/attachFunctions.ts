import React from "react";
import { parseStringFunc } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import { newWebStateType } from "../../common/types";
import { renderWebComponentType } from "../types";

export const attachFunctions = (config: newWebStateType) => {
  const { data } = config;
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
