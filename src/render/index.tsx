import { renderComponent } from "./core";
import { elementType } from "./types";

interface renderPropType {
  config: elementType;
}

const Render = (props: renderPropType) => {
  
  return <div>{renderComponent(props.config)}</div>;
};

export default Render;
