import Website from "../Website";
import { ShowTools } from "../../components";
import { useRecoilValue } from "recoil";
import { selectedElementState } from "../../recoil";
import SelectedItemStyle from "../../components/SelectedItemStyle";
import { elementList } from "../../render/core";
import { useEffect } from "react";

function Home() {
  const selectedItem = useRecoilValue(selectedElementState);

  useEffect(() => {
    if (selectedItem) {
      console.log(selectedItem);
    }
  });

  return (
    <div className="App">
      <div className="flex">
        <div
          className="min-h-screen overflow-hidden relative"
          style={{ maxHeight: "100vh", width: 300 }}
        >
          {!selectedItem ? <ShowTools /> : <SelectedItemStyle />}
        </div>
        <div style={{ width: "calc(100vw - 300px)" }}>
          <Website />
        </div>
      </div>
    </div>
  );
}

export default Home;
