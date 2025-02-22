/**
 * Creates a slice of array with n elements dropped from the beginning
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/array/drop.ts source}
 *
 * @typeParam T
 *
 * @param array - The array to query
 * @param n - The number of elements to drop
 * @returns - Returns the slice of array
 *
 * @example
 *
 * ```js
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 *
 * ```
 */
export default function drop<T>(array: T[], n = 1) {}
