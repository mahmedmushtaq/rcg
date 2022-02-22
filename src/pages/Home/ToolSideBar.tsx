import { ShowTools } from "../../components";
import SelectedItemStyle from "../../components/SelectedItemStyle";
import useToGenerateElement from "../../render/hooks/useToGenerateElement";

const ToolSideBar = ({ selectedItem }: { selectedItem: boolean }) => {
  const { onSelectTool } = useToGenerateElement();
  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{ maxHeight: "100vh", width: 300 }}
    >
      {!selectedItem ? (
        <ShowTools onSelectTool={onSelectTool} />
      ) : (
        <SelectedItemStyle />
      )}
    </div>
  );
};

export default ToolSideBar;
