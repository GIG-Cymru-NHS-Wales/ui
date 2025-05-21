import test from 'node:test';
import { assert, assertEq } from '../src/assertables';
import Trie from '../src/trie';
import TrieNode from '../src/trie_node';

testAdd();

function testAdd(): void {
    testAddMissingItemMustBeTrue();
    testAddExistingItemMustBeFalse();
    testAddShorterItemMustBeFalse();
    testAddLongerItemMustBeTrue();
}

function testAddMissingItemMustBeTrue(): void {
    let trie = new Trie<string>();
    assertEq(trie.add("hello"), true);
}

function testAddExistingItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello")
    assertEq(trie.add("hello"), false);
}

function testAddShorterItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello")
    assertEq(trie.add("he"), false);
}

function testAddLongerItemMustBeTrue(): void {
    let trie = new Trie<string>();
    trie.add("hello")
    assertEq(trie.add("helloworld"), true);
}

testDelete();

function testDelete(): void {
    testDeleteMissingItemMustBeFalse();
    testDeleteExistingItemMustBeTrue();
    testDeleteShorterItemMustBeFalse();
    testDeleteLongerItemMustBeFalse();
}

function testDeleteMissingItemMustBeFalse(): void {
    let trie = new Trie<string>();
    assertEq(trie.delete("hello"), false);
}

function testDeleteExistingItemMustBeTrue(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.delete("hello"), true);
}

function testDeleteShorterItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.delete("he"), false);
}

function testDeleteLongerItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.delete("helloworld"), false);
}

testHasExact();

function testHasExact(): void {
    testHasExactWithMissingItemMustBeFalse();
    testHasExactWithExistingItemMustBeTrue();
    testHasExactWithShorterItemMustBeFalse();
    testHasExactWithLongerItemMustBeFalse();
}

function testHasExactWithMissingItemMustBeFalse(): void {
    let trie = new Trie<string>();
    assertEq(trie.hasExact("hello"), false);
}

function testHasExactWithExistingItemMustBeTrue(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.hasExact("hello"), false);
}

function testHasExactWithShorterItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.hasExact("he"), false);
}

function testHasExactWithLongerItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.hasExact("helloworld"), false);
}

testHasPrefix();

function testHasPrefix(): void {
    testHasPrefixWithMissingItemMustBeFalse();
    testHasPrefixWithExistingItemMustBeTrue();
    testHasPrefixWithShorterItemMustBeTrue();
    testHasPrefixWithLongerItemMustBeFalse();
}

function testHasPrefixWithMissingItemMustBeFalse(): void {
    let trie = new Trie<string>();
    assertEq(trie.hasPrefix("he"), false);
}

function testHasPrefixWithExistingItemMustBeTrue(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.hasPrefix("hello"), false);
}

function testHasPrefixWithShorterItemMustBeTrue(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.hasPrefix("he"), true);
}

function testHasPrefixWithLongerItemMustBeFalse(): void {
    let trie = new Trie<string>();
    trie.add("hello");
    assertEq(trie.hasPrefix("helloworld"), true);
}
