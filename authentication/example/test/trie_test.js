"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertables_1 = require("../src/assertables");
var trie_1 = require("../src/trie");
testAdd();
function testAdd() {
    testAddMissingItemMustBeTrue();
    testAddExistingItemMustBeFalse();
    testAddShorterItemMustBeFalse();
    testAddLongerItemMustBeTrue();
}
function testAddMissingItemMustBeTrue() {
    var trie = new trie_1.default();
    (0, assertables_1.assertEq)(trie.add("hello"), true);
}
function testAddExistingItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.add("hello"), false);
}
function testAddShorterItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.add("he"), false);
}
function testAddLongerItemMustBeTrue() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.add("helloworld"), true);
}
testDelete();
function testDelete() {
    testDeleteMissingItemMustBeFalse();
    testDeleteExistingItemMustBeTrue();
    testDeleteShorterItemMustBeFalse();
    testDeleteLongerItemMustBeFalse();
}
function testDeleteMissingItemMustBeFalse() {
    var trie = new trie_1.default();
    (0, assertables_1.assertEq)(trie.delete("hello"), false);
}
function testDeleteExistingItemMustBeTrue() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.delete("hello"), true);
}
function testDeleteShorterItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.delete("he"), false);
}
function testDeleteLongerItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.delete("helloworld"), false);
}
testHasExact();
function testHasExact() {
    testHasExactWithMissingItemMustBeFalse();
    testHasExactWithExistingItemMustBeTrue();
    testHasExactWithShorterItemMustBeFalse();
    testHasExactWithLongerItemMustBeFalse();
}
function testHasExactWithMissingItemMustBeFalse() {
    var trie = new trie_1.default();
    (0, assertables_1.assertEq)(trie.hasExact("hello"), false);
}
function testHasExactWithExistingItemMustBeTrue() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.hasExact("hello"), false);
}
function testHasExactWithShorterItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.hasExact("he"), false);
}
function testHasExactWithLongerItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.hasExact("helloworld"), false);
}
testHasPrefix();
function testHasPrefix() {
    testHasPrefixWithMissingItemMustBeFalse();
    testHasPrefixWithExistingItemMustBeTrue();
    testHasPrefixWithShorterItemMustBeTrue();
    testHasPrefixWithLongerItemMustBeFalse();
}
function testHasPrefixWithMissingItemMustBeFalse() {
    var trie = new trie_1.default();
    (0, assertables_1.assertEq)(trie.hasPrefix("he"), false);
}
function testHasPrefixWithExistingItemMustBeTrue() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.hasPrefix("hello"), false);
}
function testHasPrefixWithShorterItemMustBeTrue() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.hasPrefix("he"), true);
}
function testHasPrefixWithLongerItemMustBeFalse() {
    var trie = new trie_1.default();
    trie.add("hello");
    (0, assertables_1.assertEq)(trie.hasPrefix("helloworld"), true);
}
