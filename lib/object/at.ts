/**
 * Creates an array of values corresponding to paths of object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/object/at.ts source}
 *
 * @param obj - The object to iterate over
 * @param paths - The property paths to pick
 * @returns Returns the picked values
 *
 * @example
 *
 * ```js
 * const obj = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 *
 * ```
 */
export default function at(obj: Object, paths: string[]) {}
