import { newWebStateType } from "../common/types";
import { renderComponent } from "./core";
import { renderWebComponentType } from "./types";

interface renderPropType {
  config?: newWebStateType;
}

const Render = (props: renderPropType) => {
  return <div>{props.config && renderComponent(props.config)}</div>;
};

export default Render;
