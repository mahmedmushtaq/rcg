import { renderComponent } from "../../common/render";
import { renderType } from "../../common/render/types";

interface renderPropType {
  config: renderType;
}

const Render = (props: renderPropType) => {
  return <div>{renderComponent(props.config)}</div>;
};

export default Render;
