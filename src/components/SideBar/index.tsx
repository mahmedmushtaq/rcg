import { H2, P } from "../UIWidgets";
import SearchInput from "./components/Search";
import SideBarItem from "./components/Item";
import useSideBar from "./useSideBar";

const SideBar = () => {
  const { searchTool, allTools, setSearchTool, onSelectTool } = useSideBar();

  return (
    <div className="shadow-inner h-full bg-lsbg overflow-auto">
      <div className="w-full bg-lprimary text-lbg p-4 absolute">
        <H2 className="!text-lg text-center">RCG</H2>
      </div>

      <div className="p-4 mt-16">
        <div>
          <SearchInput search={searchTool} setSearch={setSearchTool} />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {allTools.map((tool) => (
            <SideBarItem key={tool.id} tool={tool} onSelected={onSelectTool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
