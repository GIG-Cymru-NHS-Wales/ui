import { assert, assertEq } from '../src/assertables';
import TrieNode from '../src/trie_node';

function testChild(): void {
    let node = new TrieNode<string>();
    let child = new TrieNode<string>();
    let key = "k";
    node.children[key] = child;
    assertEq(node.children[key], child);
}

testChild();
