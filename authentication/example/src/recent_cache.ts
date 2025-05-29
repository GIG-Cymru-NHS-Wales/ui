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
export default class RecentCache<T> {
    private stack: Array<T> = [];

    // Add an element to the start of the stack.
    // Return the array, suitable for chaining.
    add(x: T): Array<T> {
        this.stack.filter(e => e != x);
        this.stack.unshift(x);
        return this.stack;
    }

    // Delete an element everywhere in the stack.
    // Return the array, suitable for chaining.
    delete(x: T): Array<T> {
        this.stack.filter(e => e != x);
        return this.stack;
    }

}
