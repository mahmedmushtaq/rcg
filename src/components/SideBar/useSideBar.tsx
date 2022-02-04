import { useEffect, useState } from "react";
import useToAddElementOnWebsite from "../../render/hooks/useToAddElementOnWebsite";
import { ToolItem, tools } from "../Tools";

const useSideBar = () => {
  const [allTools, setAllTools] = useState<ToolItem[]>([]);
  const [searchTool, setSearchTool] = useState("");
  const { webState, addElementToWebState } = useToAddElementOnWebsite();

  useEffect(() => {
    if (!searchTool) {
      setAllTools(tools);
      return;
    }

    const selectedTool = allTools.filter((tool) =>
      tool.heading.toLowerCase().includes(searchTool.toLowerCase())
    );

    setAllTools(selectedTool);
  }, [searchTool]);

  const onSelectTool = (tool: ToolItem) => {
    addElementToWebState(tool.element);
  };

  return { allTools, searchTool, setSearchTool, onSelectTool };
};

export default useSideBar;
