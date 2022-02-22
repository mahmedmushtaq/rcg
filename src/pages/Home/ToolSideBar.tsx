import { useRecoilValue } from "recoil";
import { ShowTools } from "../../components";
import SelectedItemStyle from "../../components/SelectedItemStyle";
import { selectedElementState } from "../../recoil";
import useToGenerateElement from "../../render/hooks/useToGenerateElement";

const ToolSideBar = () => {
  const { onSelectTool } = useToGenerateElement();
  const selectedItem = useRecoilValue(selectedElementState);
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
