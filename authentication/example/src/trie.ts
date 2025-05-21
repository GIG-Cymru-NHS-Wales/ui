import TrieNode from './trie_node';

export default class Trie<T extends string> {
    public root: TrieNode<T>;
    
    constructor() {
        this.root = new TrieNode();
    }

    // Add an element into the trie.
    // Return true if the element was added, false if it was already present.
    add(element: T) {
        let result = false;
        let node = this.root;
        for (let i = 0; i < element.length; i++) {
            let key = element[i];
            if (!node.children[key]) {
                node.children[key] = new TrieNode();
                result = true;
            }
            node = node.children[key];
        }
        return result;
    }

    // Delete an element from the trie.
    // Return true if the element was deleted, false if it was not found.
    delete(element: T) {
        const deleteRecursively = (node: TrieNode<T>, element: T, index: number) => {
            if (index === element.length) {
                return node.isLeaf()
            }
            const key = element[index];
            const child = node.children[key];
            if (!child) return false;
            if (deleteRecursively(child, element, index + 1)) {
                node.children[key] = null;
                return node.isLeaf()
            }
            return false;
        };
        return deleteRecursively(this.root, element, 0);
    }

    // Does the trie contain an element as an exact match?
    hasExact(s: T): boolean {
        let node = this.root;
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isLeaf();
    }

    // Does the trie contain a string as a prefix match?
    hasPrefix(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

}
