/**
 * Creates an array of own enumerable string keyed-value pairs for object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/object/toPairs.ts source}
 *
 * @param obj - The object to query
 * @returns Returns the key-value pairs
 *
 * @example
 *
 * ```js
 * function Foo() {
 *  this.a = 1
 *  this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * toPairs(new Foo) // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 *
 * ```
 */
export default function toPairs(obj: Object) {}
