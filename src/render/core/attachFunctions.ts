import { elementRefType } from "../../common/Tools";
import { renderElementType } from "../types";

export const attachFunctions = (config: renderElementType) => {
  return {
    onClick: () => {
      // element selected
      if (config.onClick) config.onClick(config);
    },
    ref: (el: elementRefType<HTMLButtonElement>) => {
      // used to store reference in recoil state management
      if (config.addElementRef) {
        config.addElementRef(config.id, el);
      }
    },

    // attach new function
  };
};
