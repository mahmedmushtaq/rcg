import React from "react";
import { parseStringFunc } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import { renderWebComponentType } from "../types";

export const attachFunctions = (config: renderWebComponentType) => {
  return {
    onClick: () => {
      if (config.onClick) config.onClick(config);
      //parseStringFunc(config.onClick as string)(config);
    },
    ref: (el: elementRefType<HTMLButtonElement>) => {
      // used to store reference in recoil state management
      if (config.addElementRef) {
        // const addElementRef = eval(config.addElementRef as string);
        config.addElementRef(config.id, el);
      }
    },
    onDragStart: (e: React.DragEvent) => {
      if (config.onDragStart) {
        config.onDragStart(e, config);
      }
    },

    onDragOver: (e: React.DragEvent) => {
      if (config.onDragOver) {
        config.onDragOver(e, config);
      }
    },

    onDrop: (e: React.DragEvent) => {
      if (config.onDrop) {
        config.onDrop(e, config);
      }
    },

    // attach new function
  };
};
