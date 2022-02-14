import { renderComponent } from "./core";
import { renderElementType } from "./types";

interface renderPropType {
  config: renderElementType;
}

const Render = (props: renderPropType) => {
  
  return <div>{renderComponent(props.config)}</div>;
};

export default Render;
