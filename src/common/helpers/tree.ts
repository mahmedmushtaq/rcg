import { renderElementType } from "../../render/types";

export class Component {
  constructor(
    public id: string,
    public data: renderElementType,
    public childrens: (string | Component)[] = []
  ) {}
}

export class Tree {
  private _root: Component | null = null;
  constructor() {
    this._root = null;
  }

  add(newComponent: Component, parentId?: string) {
    const component = newComponent;
    const parent = parentId ? this.findBFS(parentId) : null;
    if (parent) {
      (parent as Component).childrens.push(component);
    } else {
      // If there's no parent, make this the root node
      if (!this._root) this._root = component;
      else return "Tried to store node as root when root already exists.";
    }
  }

  findBFS(id: string) {
    let _node: Component | null = null;
    // Go thru every node in BFS
    this.traverseBFS((node: Component) => {
      // Return match if found
      if (node && node.id === id) {
        _node = node;
      }
    });

    return _node;
  }

  traverseBFS(cb: (data: Component) => void, requireFirst = false) {
    const queue = [this._root];

    if (cb)
      while (queue.length) {
        // Store current node & remove it from queue
        const node = queue.shift();

        cb(node!);
        if (requireFirst) break;

        // Push children of current node to end of queue
        if (node && node.childrens) {
          for (const child of node!.childrens) {
            queue.push(child as Component);
          }
        }
      }
  }

  rootNode() {
    let rootNode: Component;
    this.traverseBFS((node) => {
      rootNode = node;
    }, true);

    return rootNode!;
  }
}

 