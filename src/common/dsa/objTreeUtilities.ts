import { newWebStateType, treeStateType } from "../types";
import deepcopy from "deepcopy";

// const componentTree: { [key: string]: newWebStateType } = {
// body: {
//   childrens: [],
//   id: "body",
//   data: {
//     component: "div",
//     id: "body",
//     parentId: "parent",
//     child: "",
//   },
// },
// };

// const treeUtilies = (tree: treeStateType) => {
//   const componentTree = deepcopy(tree);
//   console.log(
//     " ================== newComponentDeepCopy ======================== ",
//     componentTree
//   );
//console.log();

const treeUtilities = async (completeTree: treeStateType) => {
  const componentTree = { ...deepcopy(completeTree) };

  const addComponentToTree = async (
    component: newWebStateType,
    parentId: string
  ) => {
    const { id } = component;
    const parentComponent = parentId ? await findComponent(parentId) : null;
    if (!parentComponent) {
      componentTree[id] = { ...component };
      return componentTree;
    }

    parentComponent.childrens = [...parentComponent.childrens, component!];

    return componentTree;
  };

  const findComponent: (id: string) => Promise<newWebStateType | null> = (
    id: string
  ) => {
    return new Promise((resolve, reject) => {
      traverseBFS((node: newWebStateType) => {
        if (node && node.id === id) {
          return resolve(node);
        }
      });

      return resolve(null);
    });
  };

  const traverseBFS = (cb: (node: newWebStateType) => void) => {
    const queue = [componentTree.body];
    while (queue.length) {
      const currentNode = queue.shift();

      cb(currentNode!);

      if (currentNode && currentNode.childrens) {
        for (const child of currentNode.childrens) {
          queue.push(child as newWebStateType);
        }
      }
    }
  };

  return { addComponentToTree };
};

export { treeUtilities };
