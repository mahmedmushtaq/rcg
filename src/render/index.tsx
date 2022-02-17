import { dummyTraverseTree } from "../common/helpers";
import { renderComponent } from "./core";
import { renderElementType } from "./types";

interface renderPropType {
  config: renderElementType;
}

const Render = (props: renderPropType) => {
  const traversing = dummyTraverseTree();
  return <div>{renderComponent(traversing)}</div>;
};

export default Render;
