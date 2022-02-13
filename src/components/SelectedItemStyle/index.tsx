import { ReactElement, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { elementRefType } from "../../common/Tools";
import { elementRefs, selectedElementState } from "../../recoil";
import useToGenerateElement from "../../render/hooks/useToGenerateElement";
import { H2 } from "../UIWidgets";
import SideBar from "../UIWidgets/SideBar";
import Selector from "./Components/ShowStyleSelector";

const SelectedItemStyle = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedElementState);

  return (
    <SideBar
      backOnClick={() => {
        setSelectedItem(undefined);
      }}
      searchOptions={{ search: "", setSearch: () => {} }}
    >
      <div className="mt-2">
        <Selector />
      </div>
    </SideBar>
  );
};

export default SelectedItemStyle;
