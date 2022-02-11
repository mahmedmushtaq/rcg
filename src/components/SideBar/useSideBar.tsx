import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { webState as addElementToWebState } from "../../recoil";
import { ToolItem, tools } from "../Tools";

const useSideBar = () => {
  const [allTools, setAllTools] = useState<ToolItem[]>([]);
  const [searchTool, setSearchTool] = useState("");
  const addElement = useSetRecoilState(addElementToWebState);

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
    addElement(tool.element);
  };

  return { allTools, searchTool, setSearchTool, onSelectTool };
};

export default useSideBar;
