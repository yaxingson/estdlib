/**
 * Gets the first element of array
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/array/first.ts source}
 *
 * @param array - The array to query
 * @returns - Returns the first element of array
 *
 * @example
 *
 * ```js
 * first([1, 2, 3])
 * // => 1
 *
 * first([])
 * // => undefined
 *
 * ```
 */
export default function first(array: unknown[]) {
  return array[0]
}
