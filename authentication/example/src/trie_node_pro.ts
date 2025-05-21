// TrieNodePro is a TrieNode with more functions that wrap the children.
//
// We provide this code because it can be a useful way to learn how to use the
// children, such as to add a child, set a child, visit each child, etc.
//
export default class TrieNodePro<T extends string | number | symbol> {
    private children: { [key in T]?: TrieNodePro<T> } = {};

    constructor() {
        this.children = {};
    }

    // Get a child node by key.
    //
    // Example:
    //
    //   const key = "a";
    //   const child = trieNode.getChild(key);
    //
    public getChild(key: T): TrieNodePro<T> | null {
        return this.children[key] || null;
    }

    // Add a child node by key and value.
    //
    // Example:
    //
    //    const key = "a";
    //    const child = new TrieNode();
    //    trieNode.addChild(key, child);
    //
    public setChild(key: T, child: TrieNodePro<T>): void {
        this.children[key] = child;
    }

    // Does this node have a child with the given key?
    //
    // Example:
    //
    //   const key = "a";
    //   const has = trieNode.hasChild(key);
    //
    public hasChild(key: T): boolean {
        return this.children.hasOwnProperty(key);
    }

    // Get all children of this node.
    //
    // Example:
    //
    //   const children = trieNode.getChildren();
    //
    public getChildren(): { [key in T]?: TrieNodePro<T> } {
        return this.children;
    }

    // Delete a child node by key.
    //
    //    const key = "a";
    //    trieNode.deleteChild(key);
    //
    public deleteChild(key: T): void {
        if (this.hasChild(key)) {
            delete this.children[key];
        }
    }

    // Get the child node keys.
    //
    // Example:
    //
    //    const keys = trieNode.getKeys();
    //
    public getKeys(): string[] {
        return Object.keys(this.children);
    }

    // Get the child node values.
    //
    // Example:
    //
    //    const values = trieNode.getValues();
    //
    public getValues(): T[] {
        return Object.values(this.children);
    }

    // Get the number of children.
    //
    // Example:
    //
    //   const size = trieNode.getSize();
    //
    public getSize(): number {
        return Object.keys(this.children).length;
    }

    // Clear all the children i.e. delete all child nodes.
    //
    // Example:
    //
    //    trieNode.clear();
    //
    public clear(): void {
        this.children = {};
    }

    // Apply a callback fundtion to all child nodes.
    //
    // Example:
    //
    //   let callback = (key: string, value: TrieNode) => { console.log(key, value); };
    //   trieNode.forEach(callback);
    //
    public forEach(callback: (key: T, value: TrieNodePro<T>) => void): void {
        for (const key in this.children) {
            let value: TrieNodePro<T> | undefined = this.children[key];
            if (value !== null && value !== undefined) {
                callback(key, value);
            }
        }
    }

    // Convert the TrieNode to a string representation.
    //
    // Example:
    //
    //   const str = trieNode.toString();
    //    console.log(str);
    //
    public toString(): string {
        return JSON.stringify(this.children, null, 2);
    }

    // Convert the TrieNode to a JSON representation.
    //
    // Example:
    //
    //    const json = trieNode.toJSON();
    //    console.log(json);
    //
    public toJSON(): Record<string, unknown> {
        return this.children;
    }

    // Clone the TrieNode.
    //
    // Example:
    //
    //   let clone = trieNode.clone();
    //
    public clone(): TrieNodePro<T> {
        const clone = new TrieNodePro<T>();
        clone.children = { ...this.children };
        return clone;
    }

    // Is this TrieNode a leaf i.e. has no children?
    //
    // Example:
    //
    //   const isLeaf = trieNode.isLeaf();
    //
    public isLeaf(): boolean {
        return Object.keys(this.children).length === 0;
    }
    
}

module.exports = TrieNodePro;
