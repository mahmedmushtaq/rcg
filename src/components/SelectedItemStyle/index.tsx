import { useRecoilState, useRecoilValue } from "recoil";
import { elementRefs, selectedElementState } from "../../recoil";
import { H2 } from "../UIWidgets";
import SideBar from "../UIWidgets/SideBar";
import Selector from "./Components/ShowStyleSelector";
import useToSelectStyles from "./hooks/useToSelectStyle";

const SelectedItemStyle = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedElementState);
  const { onChange, selectedValues, setText, text } = useToSelectStyles();

  return (
    <SideBar
      backOnClick={() => {
        setSelectedItem(undefined);
      }}
      searchOptions={{ search: "", setSearch: () => {} }}
    >
      <div className="mt-2">
        <div>
          <Selector onChange={onChange} selectedValues={selectedValues} />
        </div>
        <div>
          <input
            className="p-2 mt-2"
            placeholder="Enter your text here"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </div>
    </SideBar>
  );
};

export default SelectedItemStyle;
