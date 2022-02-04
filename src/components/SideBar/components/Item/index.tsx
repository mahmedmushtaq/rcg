import React from "react";
import { Icon } from "react-feather";
import { ToolItem } from "../../../Tools";
import { P } from "../../../UIWidgets";

interface PropType {
  tool: ToolItem;
  onSelected: (prop: ToolItem) => void;
}

const SideBarItem = ({ onSelected, tool }: PropType) => {
  return (
    <div
      className="shadow-inner p-4 flex flex-col bg-lbg rounded items-center cursor-pointer"
      onClick={() => {
        onSelected({
          ...tool,
          element: { ...tool.element, id: tool.id + "-" + Math.random() },
        });
      }}
    >
      <tool.icon size={30} />
      <P className="text-xs">{tool.heading}</P>
    </div>
  );
};

export default SideBarItem;
