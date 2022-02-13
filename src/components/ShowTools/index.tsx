import { H2, P } from "../UIWidgets";
import SearchInput from "../UIWidgets/SideBar/Search";
import Item from "./components/Item";
import useToShowTools from "./useToShowTools";
import SideBar from "../UIWidgets/SideBar";

const ShowTools = () => {
  const {
    searchTool,
    allTools,
    setSearchTool,
    onSelectTool,
    setSelectedElement,
    addElementRef,
  } = useToShowTools();

  return (
    <SideBar searchOptions={{ search: searchTool, setSearch: setSearchTool }}>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {allTools.map((tool) => (
          <Item
            setSelectedElement={setSelectedElement}
            key={tool.element.id + "-" + Math.random()}
            tool={tool}
            addElementRef={addElementRef}
            onSelected={onSelectTool}
          />
        ))}
      </div>
    </SideBar>
  );
};

export default ShowTools;