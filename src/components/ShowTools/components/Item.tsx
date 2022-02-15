import React, { createRef, useRef } from "react";
import { Icon } from "react-feather";
import { renderElementType } from "../../../render/types";
import { elementRefType, ToolItem } from "../../../common/Tools";
import { P } from "../../UIWidgets";
import { generateElementUniqueId } from "../../../common/helpers";

interface PropType {
  tool: ToolItem;
  onSelected: (prop: ToolItem) => void;
}

const Item = ({ onSelected, tool }: PropType) => {
  return (
    <div
      className="shadow-inner p-4 flex flex-col bg-lbg rounded items-center cursor-pointer"
      onClick={() => {
        onSelected({
          ...tool,
          element: {
            ...tool.element,
            id: generateElementUniqueId(tool.element.id),
          },
        });
      }}
    >
      <tool.icon size={30} />
      <P className="text-xs">{tool.heading}</P>
    </div>
  );
};

export default Item;
