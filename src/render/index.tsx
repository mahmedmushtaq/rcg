import { useRecoilValue } from "recoil";
import { newWebStateType } from "../common/types";
import { componentsData } from "../recoil";
import { renderComponent } from "./core";
import { renderWebComponentType } from "./types";

interface renderPropType {
  config?: newWebStateType;
}

const Render = (props: renderPropType) => {
  const allComponentsData = useRecoilValue(componentsData);
  console.log("allComponentsData is ", allComponentsData);
  return (
    <div>
      {props.config &&
        Object.keys(allComponentsData).length > 0 &&
        renderComponent(props.config, allComponentsData)}
    </div>
  );
};

export default Render;
