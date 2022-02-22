import Website from "../Website";
import { ShowTools } from "../../components";
import { useRecoilValue } from "recoil";
import { selectedElementState } from "../../recoil";
import ToolSideBar from "./ToolSideBar";

function Home() {
  return (
    <div className="App">
      <div className="flex">
        <ToolSideBar />

        <div style={{ width: "calc(100vw - 300px)" }}>
          <Website />
        </div>
      </div>
    </div>
  );
}

export default Home;
