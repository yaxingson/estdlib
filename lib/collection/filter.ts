/**
 * Iterates over elements of collection, returning an array of all elements
 * predicate returns truthy for
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/collection/filter.ts source}
 *
 * @typeParam T
 *
 * @param collection - The collection to iterate over
 * @param iteratee - The function invoked per iteration
 * @returns Returns the new filtered array
 *
 * @example
 *
 * ```js
 * const users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ]
 *
 * filter(users, u=>!u.active)
 * // => objects for ['fred']
 *
 * filter(users, { 'age': 36, 'active': true })
 * // => objects for ['barney']
 *
 * filter(users, ['active', false])
 * // => objects for ['fred']
 *
 * filter(users, 'active')
 * // => objects for ['barney']
 *
 * ```
 */
export default function filter<T>(collection: T[], predicate?: Function) {}
