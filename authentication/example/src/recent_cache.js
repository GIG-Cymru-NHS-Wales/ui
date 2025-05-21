"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RecentCache is a LIFO LRU cache of elements.
//
// Example:
//
//     const recentCache = new RecentCache<string>();
//     recentCache.add("hello");
//     recentCache.add("world");
//     recentCache.array[0]; // => "world"
//     recentCache.array[1]; // => "hello"
//
var RecentCache = /** @class */ (function () {
    function RecentCache() {
        this.stack = [];
    }
    // Add an element to the start of the stack.
    // Return the array, suitable for chaining.
    RecentCache.prototype.add = function (x) {
        this.stack.filter(function (e) { return e != x; });
        this.stack.unshift(x);
        return this.stack;
    };
    // Delete an element everywhere in the stack.
    // Return the array, suitable for chaining.
    RecentCache.prototype.delete = function (x) {
        this.stack.filter(function (e) { return e != x; });
        return this.stack;
    };
    return RecentCache;
}());
exports.default = RecentCache;
