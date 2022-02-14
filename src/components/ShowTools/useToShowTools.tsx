import { useEffect, useState } from "react";
import useToGenerateElement from "../../render/hooks/useToGenerateElement";
import { ToolItem, tools } from "../../common/Tools";

const useToShowTools = () => {
  const [allTools, setAllTools] = useState<ToolItem[]>([]);
  const [searchTool, setSearchTool] = useState("");
  const { setSelectedElement, onSelectTool, addElementRef } =
    useToGenerateElement();
  useEffect(() => {
    if (!searchTool) {
      setAllTools(tools);
      return;
    }

    // show only searched tool
    const selectedTool = allTools.filter((tool) =>
      tool.heading.toLowerCase().includes(searchTool.toLowerCase())
    );

    setAllTools(selectedTool);
  }, [searchTool]);

  return {
    allTools,
    searchTool,
    setSearchTool,
    onSelectTool,
    setSelectedElement,
    addElementRef,
  };
};

export default useToShowTools;
