import { dummyTraverseTree } from "../common/helpers";
import { renderComponent } from "./core";
import { renderWebComponentType } from "./types";

interface renderPropType {
  config?: renderWebComponentType;
}

const Render = (props: renderPropType) => {
  const traversing = dummyTraverseTree();

  return <div>{renderComponent(traversing)}</div>;
};

export default Render;
