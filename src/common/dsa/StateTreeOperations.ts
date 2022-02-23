import { elementCompleteState, treeStateType } from "../types";
import deepcopy from "deepcopy";
import { renderWebComponentType } from "../../render/types";

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
    component: elementCompleteState,
    newParentId: string
  ) {
    const { parentId: oldParentId, id } = component.data;

    // get old parent
    const oldParent = await this.findComponent(oldParentId);

    console.log("old parent is ", oldParent);

    // remove child from old parent
    oldParent!.childrens = oldParent!.childrens.filter((child) => {
      if (typeof child === "string") {
        return child;
      }
      return child.id !== id;
    });

    // find new parent
    const newParent = await this.findComponent(newParentId);

    console.log(" ========== new Parent is ========== ", newParent);

    // [skip this if you want] otherwise ===> update parentId of the component in componentMap
    this.storeComponentIntoMap({
      ...component.data,
      parentId: newParentId,
    });

    // add this children into new parent and also update the parentId
    newParent!.childrens = [
      ...newParent!.childrens,
      {
        ...component,
        data: { ...component.data, parentId: newParentId },
      },
    ];

    return this.completeTreeState;
  }

  regenerateTree = async () => {
    // get all keys from map
    const allKeys = Array.from(storeComponentsMap.keys());
    // convert keys into array
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

  addComponentToTree = async (
    component: elementCompleteState,
    parentId: string
  ) => {
    // get component id
    const { id } = component;
    // find parent component
    const parentComponent = parentId
      ? await this.findComponent(parentId)
      : null;

    // no parent component is present
    // make this current component as a parent component
    if (!parentComponent) {
      this.completeTreeState[id] = { ...component };
      this.storeComponentIntoMap({ ...component.data });
      return this.completeTreeState;
    }

    // parent component is found
    // add this child to a parent component
    parentComponent.childrens = [...parentComponent.childrens, component!];

    // finally add component into map
    this.storeComponentIntoMap({ ...parentComponent.data });

    return this.completeTreeState;
  };

  deleteComponentFromTree = async (element: renderWebComponentType) => {
    const { parentId, id } = element;

    // find parent component
    const parentComponent = parentId
      ? await this.findComponent(parentId)
      : null;

    // no parent component is found
    // delete this component simply just like normal deletion of the key
    if (!parentComponent) {
      delete this.completeTreeState[id];
      return this.completeTreeState;
    }

    // remove this component from parent childrens
    parentComponent.childrens = parentComponent.childrens.filter((child) => {
      if (typeof child === "string") {
        return child;
      }
      return child.id !== id;
    });

    return this.completeTreeState;
  };

  findComponent: (id: string) => Promise<elementCompleteState | null> = (
    id: string
  ) => {
    // used to find component
    return new Promise((resolve, reject) => {
      this.traverseBFS((node: elementCompleteState) => {
        if (node && node.id === id) {
          return resolve(node);
        }
      });

      return resolve(null);
    });
  };

  traverseBFS = (cb: (node: elementCompleteState) => void) => {
    // body is a root elemenet
    // we are starting our traversing from root element ( body )
    const queue = [this.completeTreeState.body];
    while (queue.length) {
      // removed the first element from an array and returns the removed element
      const currentNode = queue.shift();

      // current node is traversed therefore callback is called in order to print or for other stuffs
      cb(currentNode!);

      // if current node has childrens
      if (currentNode && currentNode.childrens) {
        // push all the current node childrens into an array
        for (const child of currentNode.childrens) {
          queue.push(child as elementCompleteState);
        }
      }
    }
  };
}

export { TreeOperations };
