import { renderComponent } from "./core";
import { renderType } from "./types";

interface renderPropType {
  config: renderType;
}

const Render = (props: renderPropType) => {
  
  return <div>{renderComponent(props.config)}</div>;
};

export default Render;
