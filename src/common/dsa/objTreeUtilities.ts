import { newWebStateType, treeStateType } from "../types";
import deepcopy from "deepcopy";
import { renderWebComponentType } from "../../render/types";
import { defaultBodyValue } from "../enums";

export const storeComponentsMap = new Map<string, renderWebComponentType>();

class TreeOperations {
  private completeTreeState: treeStateType;
  constructor(treeState: treeStateType) {
    this.completeTreeState = { ...deepcopy(treeState) };
  }

  private storeComponentIntoMap(component: renderWebComponentType) {
    const { id } = component;
    storeComponentsMap.set(id, component);
  }

  async updateComponentMap(
    component: newWebStateType,
    idsData: {
      newParentId: string;
      componentNewId: string;
    }
  ) {
    const { newParentId, componentNewId: newId } = idsData;
    console.log("this tree state is ", this.completeTreeState);
    // //  storeComponentsMap.set(id, component);
    const { parentId: oldParentId, id } = component.data;

    const oldParent = await this.findComponent(oldParentId);
    // remove it from Old Parent

    oldParent!.childrens = oldParent!.childrens.filter((child) => {
      if (typeof child === "string") {
        return child;
      }
      return child.id !== id;
    });

    const newParent = await this.findComponent(newParentId);

    storeComponentsMap.delete(id);
    this.storeComponentIntoMap({
      ...component.data,
      parentId: newParentId,
      id: newId,
    });

    newParent!.childrens = [
      ...newParent!.childrens,
      {
        ...component,
        data: { ...component.data, parentId: newParentId, id: newId },
        id: newId,
      },
    ];

    return this.completeTreeState;
  }

  regenerateTree = async () => {
    const allKeys = Array.from(storeComponentsMap.keys());
    const asyncMap = allKeys.map(async (k) => {
      const val = storeComponentsMap.get(k);

      if (val) {
        return await this.addComponentToTree(
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

    return this.completeTreeState;
  };

  addComponentToTree = async (component: newWebStateType, parentId: string) => {
    const { id } = component;
    const parentComponent = parentId
      ? await this.findComponent(parentId)
      : null;
    if (!parentComponent) {
      this.completeTreeState[id] = { ...component };
      this.storeComponentIntoMap({ ...component.data });
      return this.completeTreeState;
    }

    parentComponent.childrens = [...parentComponent.childrens, component!];

    console.log("this complete state is ", this.completeTreeState);

    return this.completeTreeState;
  };

  deleteComponentFromTree = async (element: renderWebComponentType) => {
    const { parentId, id } = element;
    const parentComponent = parentId
      ? await this.findComponent(parentId)
      : null;
    if (!parentComponent) {
      delete this.completeTreeState[id];
      return this.completeTreeState;
    }

    parentComponent.childrens = parentComponent.childrens.filter((child) => {
      if (typeof child === "string") {
        return child;
      }
      return child.id !== id;
    });

    console.log("delete state is ", parentComponent);

    return this.completeTreeState;
  };

  findComponent: (id: string) => Promise<newWebStateType | null> = (
    id: string
  ) => {
    return new Promise((resolve, reject) => {
      this.traverseBFS((node: newWebStateType) => {
        if (node && node.id === id) {
          return resolve(node);
        }
      });

      return resolve(null);
    });
  };

  traverseBFS = (cb: (node: newWebStateType) => void) => {
    const queue = [this.completeTreeState.body];
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
}

export { TreeOperations };
