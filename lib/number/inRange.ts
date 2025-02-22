/**
 * Checks if n is between start and up to, but not including end
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/number/inRange.ts source}
 *
 * @param num - The number to check.
 * @param start - The start of the range
 * @param end - The end of the range
 * @returns Returns true if number is in the range, else false
 *
 * @example
 *
 * ```js
 * inRange(3, 2, 4) // => true
 *
 * inRange(4, 8) // => true
 *
 * inRange(2, 2) // => false
 *
 * inRange(5.2, 4) // => false
 *
 * inRange(-3, -2, -6) // => true
 *
 * ```
 */
export default function inRange(num: number, start: number, end?: number) {}
