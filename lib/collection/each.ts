/**
 * Iterates over elements of collection and invokes iteratee for each element
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/collection/each.ts source}
 *
 * @typeParam T
 *
 * @param collection - The collection to iterate over
 * @param iteratee - The function invoked per iteration
 *
 * @example
 *
 * ```js
 * each([1, 2], val=>console.log(val))
 * // => Logs `1` then `2`
 *
 * each({a:1, b:2}, (val, key)=>console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed)
 *
 * ```
 */
export default function each<T>(collection: T[] | object, iteratee?: Function) {}
