/**
 * Creates an array of elements split into groups the length of size
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/array/chunk.ts source}
 *
 * @typeParam T
 *
 * @param array - The array to process
 * @param size - The length of each chunk
 * @returns - Returns the new array of chunks
 *
 * @example
 *
 * ```js
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 *
 * ```
 */
import { NotImplementedError } from '../_internal'

export default function chunk<T>(array: T[], size = 1): T[][] {
  throw NotImplementedError
}
