// TrieNode is a trie node data structure with a public children object.
//
// If you prefer a private chlidren object, then use TrieNodePro.
//
export default class TrieNode<T extends string | number | symbol> {
    public children: { [key in T]?: TrieNode<T> } = {};

    constructor() {
        this.children = {};
    }

    public isLeaf(): boolean {
        return Object.keys(this.children).length === 0;
    }

}
