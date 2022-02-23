import { useRecoilValue } from "recoil";
import { elementCompleteState } from "../common/types";
import { componentsData, selectedElementState } from "../recoil";
import { renderComponent } from "./core";

interface renderPropType {
  config?: elementCompleteState;
}

const Render = (props: renderPropType) => {
  const allComponentsData = useRecoilValue(componentsData);
  const selectedItem = useRecoilValue(selectedElementState);

  return (
    <div>
      {props.config &&
        Object.keys(allComponentsData).length > 0 &&
        renderComponent(props.config, allComponentsData)}
    </div>
  );
};

export default Render;
