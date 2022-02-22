import Item from "./components/Item";
import useToShowTools from "./useToShowTools";
import SideBar from "../UIWidgets/SideBar";
import { ToolItem } from "../../common/Tools";

interface PropsType {
  onSelectTool: (toolItem: ToolItem) => void;
}

const ShowTools = ({ onSelectTool }: PropsType) => {
  const { searchTool, allTools, setSearchTool } = useToShowTools();

  return (
    <SideBar searchOptions={{ search: searchTool, setSearch: setSearchTool }}>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {allTools.map((tool) => (
          <Item key={tool.element.id} tool={tool} onSelected={onSelectTool} />
        ))}
      </div>
    </SideBar>
  );
};

export default ShowTools;
