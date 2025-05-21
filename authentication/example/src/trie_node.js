"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TrieNode is a trie node data structure with a public children object.
//
// If you prefer a private chlidren object, then use TrieNodePro.
//
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = {};
        this.children = {};
    }
    TrieNode.prototype.isLeaf = function () {
        return Object.keys(this.children).length === 0;
    };
    return TrieNode;
}());
exports.default = TrieNode;
