/**
 * Creates an array with all falsey values removed
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/array/compact.ts source}
 *
 * @typeParam T
 *
 * @param array - The array to compact
 * @returns - Returns the new array of filtered values
 *
 * @example
 *
 * ```js
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 *
 * ```
 */
import { NotImplementedError } from '../_internal'

export default function compact<T>(
  array: T[]
): Exclude<T, false | null | 0 | 0n | '' | undefined>[] {
  throw NotImplementedError
}
