import React, { createRef, useRef } from "react";
import { Icon } from "react-feather";
import { renderElementType } from "../../../render/types";
import { elementRefType, ToolItem } from "../../../common/Tools";
import { P } from "../../UIWidgets";
import { generateElementUniqueId } from "../../../common/helpers";

interface PropType {
  tool: ToolItem;
  onSelected: (prop: ToolItem) => void;
  setSelectedElement: (prop: renderElementType) => void;
  addElementRef: (id: any, el: elementRefType<HTMLElement>) => void;
}

const Item = ({
  onSelected,
  tool,
  setSelectedElement,
  addElementRef,
}: PropType) => {
  const itemSelected = (el: renderElementType) => () => {
    setSelectedElement(el);
  };

  return (
    <div
      className="shadow-inner p-4 flex flex-col bg-lbg rounded items-center cursor-pointer"
      onClick={() => {
        const elementUniqueId = generateElementUniqueId(tool.element.id);

        onSelected({
          ...tool,
          element: {
            ...tool.element,
            id: elementUniqueId,
            addElementRef,
            onClick: itemSelected({ ...tool.element, id: elementUniqueId }),
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
