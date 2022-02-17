import { renderWebComponentType } from "../../render/types";

export class WebComponent {
  constructor(
    public id: string,
    public data: renderWebComponentType,
    public childrens: (string | WebComponent)[] = []
  ) {}
}

export class Tree {
  private _root: WebComponent | null = null;
  constructor() {
    this._root = null;
  }

  add(newWebComponent: WebComponent, parentId?: string) {
    const WebComponent = newWebComponent;
    const parent = parentId ? this.findBFS(parentId) : null;
    if (parent) {
      (parent as WebComponent).childrens.push(WebComponent);
    } else {
      // If there's no parent, make this the root node
      if (!this._root) this._root = WebComponent;
      else return "Tried to store node as root when root already exists.";
    }
  }

  findBFS(id: string) {
    let _node: WebComponent | null = null;
    // Go thru every node in BFS
    this.traverseBFS((node: WebComponent) => {
      // Return match if found
      if (node && node.id === id) {
        _node = node;
      }
    });

    return _node;
  }

  traverseBFS(cb: (data: WebComponent) => void, requireFirst = false) {
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
            queue.push(child as WebComponent);
          }
        }
      }
  }

  rootNode() {
    let rootNode: WebComponent;
    this.traverseBFS((node) => {
      rootNode = node;
    }, true);

    return rootNode!;
  }
}
