import Website from "../Website";
import { ShowTools } from "../../components";
import { useRecoilValue } from "recoil";
import { selectedElementState, toolSelected } from "../../recoil";
import ToolSideBar from "./ToolSideBar";

function Home() {
  const selectedItem = useRecoilValue(selectedElementState);

  return (
    <div className="App">
      <div className="flex">
        <ToolSideBar selectedItem={!!selectedItem} />

        <div style={{ width: "calc(100vw - 300px)" }}>
          <Website />
        </div>
      </div>
    </div>
  );
}

export default Home;
