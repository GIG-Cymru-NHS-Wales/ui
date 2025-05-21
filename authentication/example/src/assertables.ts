/* Assertables: assert functions with TypeScript implementation. */

export function assert(a: any): void {
    if (a) { return }
    throw new Error(`assert(${a})`);
}

export function assertEq(a: any, b: any) {
    if (a === b) { return }
    if (
    typeof a === 'object' &&
    typeof b === 'object' &&
    a.length === b.length &&
    a.every((element, i) => element === b[i])
    ) {
        return
    }
    throw new Error(`assertEq(${a}, ${b})`);
}


export function assertNe(a: any, b: any) {
    if (a !== b) { return }
    if (
    typeof a === 'object' &&
    typeof b === 'object' &&
    a.length === b.length &&
    a.any((element, i) => element !== b[i])
    ) {
        return
    }
    throw new Error(`assertNe(${a}, ${b})`);
}

module.exports = {
    assert,
    assertEq,
    assertNe
};
