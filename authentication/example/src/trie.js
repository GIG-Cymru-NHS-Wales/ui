"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trie_node_1 = require("./trie_node");
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new trie_node_1.default();
    }
    // Add an element into the trie.
    // Return true if the element was added, false if it was already present.
    Trie.prototype.add = function (element) {
        var result = false;
        var node = this.root;
        for (var i = 0; i < element.length; i++) {
            var key = element[i];
            if (!node.children[key]) {
                node.children[key] = new trie_node_1.default();
                result = true;
            }
            node = node.children[key];
        }
        return result;
    };
    // Delete an element from the trie.
    // Return true if the element was deleted, false if it was not found.
    Trie.prototype.delete = function (element) {
        var deleteRecursively = function (node, element, index) {
            if (index === element.length) {
                return node.isLeaf();
            }
            var key = element[index];
            var child = node.children[key];
            if (!child)
                return false;
            if (deleteRecursively(child, element, index + 1)) {
                node.children[key] = null;
                return node.isLeaf();
            }
            return false;
        };
        return deleteRecursively(this.root, element, 0);
    };
    // Does the trie contain an element as an exact match?
    Trie.prototype.hasExact = function (s) {
        var node = this.root;
        for (var i = 0; i < s.length; i++) {
            var char = s[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isLeaf();
    };
    // Does the trie contain a string as a prefix match?
    Trie.prototype.hasPrefix = function (prefix) {
        var node = this.root;
        for (var i = 0; i < prefix.length; i++) {
            var char = prefix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    };
    return Trie;
}());
exports.default = Trie;
