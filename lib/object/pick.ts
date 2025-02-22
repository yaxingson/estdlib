/**
 * Creates an object composed of the picked object properties
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/object/pick.ts source}
 *
 * @param obj - The source object
 * @param paths - The property paths to pick
 * @returns Returns the new object
 *
 * @example
 *
 * ```js
 * const obj = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(obj, ['a', 'c'])
 * // => {'a':1, 'c':3}
 *
 * ```
 */
export default function pick(obj: Object, paths: string | string[]) {}
