"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// TrieNodePro is a TrieNode with more functions that wrap the children.
//
// We provide this code because it can be a useful way to learn how to use the
// children, such as to add a child, set a child, visit each child, etc.
//
var TrieNodePro = /** @class */ (function () {
    function TrieNodePro() {
        this.children = {};
        this.children = {};
    }
    // Get a child node by key.
    //
    // Example:
    //
    //   const key = "a";
    //   const child = trieNode.getChild(key);
    //
    TrieNodePro.prototype.getChild = function (key) {
        return this.children[key] || null;
    };
    // Add a child node by key and value.
    //
    // Example:
    //
    //    const key = "a";
    //    const child = new TrieNode();
    //    trieNode.addChild(key, child);
    //
    TrieNodePro.prototype.setChild = function (key, child) {
        this.children[key] = child;
    };
    // Does this node have a child with the given key?
    //
    // Example:
    //
    //   const key = "a";
    //   const has = trieNode.hasChild(key);
    //
    TrieNodePro.prototype.hasChild = function (key) {
        return this.children.hasOwnProperty(key);
    };
    // Get all children of this node.
    //
    // Example:
    //
    //   const children = trieNode.getChildren();
    //
    TrieNodePro.prototype.getChildren = function () {
        return this.children;
    };
    // Delete a child node by key.
    //
    //    const key = "a";
    //    trieNode.deleteChild(key);
    //
    TrieNodePro.prototype.deleteChild = function (key) {
        if (this.hasChild(key)) {
            delete this.children[key];
        }
    };
    // Get the child node keys.
    //
    // Example:
    //
    //    const keys = trieNode.getKeys();
    //
    TrieNodePro.prototype.getKeys = function () {
        return Object.keys(this.children);
    };
    // Get the child node values.
    //
    // Example:
    //
    //    const values = trieNode.getValues();
    //
    TrieNodePro.prototype.getValues = function () {
        return Object.values(this.children);
    };
    // Get the number of children.
    //
    // Example:
    //
    //   const size = trieNode.getSize();
    //
    TrieNodePro.prototype.getSize = function () {
        return Object.keys(this.children).length;
    };
    // Clear all the children i.e. delete all child nodes.
    //
    // Example:
    //
    //    trieNode.clear();
    //
    TrieNodePro.prototype.clear = function () {
        this.children = {};
    };
    // Apply a callback fundtion to all child nodes.
    //
    // Example:
    //
    //   let callback = (key: string, value: TrieNode) => { console.log(key, value); };
    //   trieNode.forEach(callback);
    //
    TrieNodePro.prototype.forEach = function (callback) {
        for (var key in this.children) {
            var value = this.children[key];
            if (value !== null && value !== undefined) {
                callback(key, value);
            }
        }
    };
    // Convert the TrieNode to a string representation.
    //
    // Example:
    //
    //   const str = trieNode.toString();
    //    console.log(str);
    //
    TrieNodePro.prototype.toString = function () {
        return JSON.stringify(this.children, null, 2);
    };
    // Convert the TrieNode to a JSON representation.
    //
    // Example:
    //
    //    const json = trieNode.toJSON();
    //    console.log(json);
    //
    TrieNodePro.prototype.toJSON = function () {
        return this.children;
    };
    // Clone the TrieNode.
    //
    // Example:
    //
    //   let clone = trieNode.clone();
    //
    TrieNodePro.prototype.clone = function () {
        var clone = new TrieNodePro();
        clone.children = __assign({}, this.children);
        return clone;
    };
    // Is this TrieNode a leaf i.e. has no children?
    //
    // Example:
    //
    //   const isLeaf = trieNode.isLeaf();
    //
    TrieNodePro.prototype.isLeaf = function () {
        return Object.keys(this.children).length === 0;
    };
    return TrieNodePro;
}());
exports.default = TrieNodePro;
module.exports = TrieNodePro;
