/**
 * Recursively flatten array up to depth times
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/array/flatten.ts source}
 *
 * @param array - The array to flatten
 * @param depth - The maximum recursion depth
 * @returns - Returns the new flattened array
 *
 * @example
 *
 * ```js
 * const arr = [1, [2, [3, [4]], 5]]
 *
 * flatten(arr)
 * // => [1, 2, [3, [4]], 5]
 *
 * flatten(arr, 2)
 * // => [1, 2, 3, [4], 5]
 *
 * flatten(arr, Infinity)
 * // => [1, 2, 3, 4, 5]
 *
 * ```
 */
export default function flatten<T>(array: T[], depth = 1) {}
