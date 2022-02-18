import { newWebStateType, treeStateType } from "../types";
import deepcopy from "deepcopy";
import { renderWebComponentType } from "../../render/types";

export const storeComponentsMap = new Map<string, renderWebComponentType>();

const treeUtilities = async (completeTree: treeStateType) => {
  const componentTree = { ...deepcopy(completeTree) };

  const storeComponentIntoMap = (
    id: string,
    component: renderWebComponentType
  ) => {
    storeComponentsMap.set(id, component);
  };

  const updateComponentMap = (
    id: string,
    component: renderWebComponentType
  ) => {
    storeComponentsMap.set(id, component);
  };

  const regenerateTree = async () => {
    const allKeys = Array.from(storeComponentsMap.keys());
    const asyncMap = allKeys.map(async (k) => {
      const val = storeComponentsMap.get(k);

      if (val) {
        return await addComponentToTree(
          {
            id: k,
            data: { ...val },
            childrens: [val!.child],
          },
          val.parentId
        );
      }

      return val;
    });

    await Promise.all(asyncMap);

    return componentTree;
  };

  const addComponentToTree = async (
    component: newWebStateType,
    parentId: string
  ) => {
    const { id } = component;
    const parentComponent = parentId ? await findComponent(parentId) : null;
    if (!parentComponent) {
      componentTree[id] = { ...component };
      storeComponentIntoMap(id, { ...component.data });
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

  return { addComponentToTree, updateComponentMap, regenerateTree };
};

export { treeUtilities };
