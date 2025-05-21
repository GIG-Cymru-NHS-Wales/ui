"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertables_1 = require("../src/assertables");
var trie_node_1 = require("../src/trie_node");
function testChild() {
    var node = new trie_node_1.default();
    var child = new trie_node_1.default();
    var key = "k";
    node.children[key] = child;
    (0, assertables_1.assertEq)(node.children[key], child);
}
testChild();
