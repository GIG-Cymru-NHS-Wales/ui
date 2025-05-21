"use strict";
/* Assertables: assert functions with TypeScript implementation. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = assert;
exports.assertEq = assertEq;
exports.assertNe = assertNe;
function assert(a) {
    if (a) {
        return;
    }
    throw new Error("assert(".concat(a, ")"));
}
function assertEq(a, b) {
    if (a === b) {
        return;
    }
    if (typeof a === 'object' &&
        typeof b === 'object' &&
        a.length === b.length &&
        a.every(function (element, i) { return element === b[i]; })) {
        return;
    }
    throw new Error("assertEq(".concat(a, ", ").concat(b, ")"));
}
function assertNe(a, b) {
    if (a !== b) {
        return;
    }
    if (typeof a === 'object' &&
        typeof b === 'object' &&
        a.length === b.length &&
        a.any(function (element, i) { return element !== b[i]; })) {
        return;
    }
    throw new Error("assertNe(".concat(a, ", ").concat(b, ")"));
}
module.exports = {
    assert: assert,
    assertEq: assertEq,
    assertNe: assertNe
};
