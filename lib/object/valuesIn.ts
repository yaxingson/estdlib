/**
 * Creates an array of the own and inherited enumerable string keyed property values of object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/object/valuesIn.ts source}
 *
 * @param obj - The object to query
 * @returns Returns the array of property values
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
 * valuesIn(new Foo) // => [1, 2, 3] (iteration order is not guaranteed)
 *
 * ```
 */
export default function valuesIn(obj: Object) {}
