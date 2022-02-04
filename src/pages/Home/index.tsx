import Website from "../Website";
import { SideBar } from "../../components";

function Home() {
  return (
    <div className="App">
      <div className="flex">
        <div
          className="min-h-screen overflow-hidden relative"
          style={{ maxHeight: "100vh", width: 300 }}
        >
          <SideBar />
        </div>
        <div style={{ width: "calc(100vw - 300px)" }}>
          <Website />
        </div>
      </div>
    </div>
  );
}

export default Home;
