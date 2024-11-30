/**
 * Checks if value is classified as a Date object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isDate.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is a date object, else false
 *
 * @example
 *
 * ```js
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 *
 * ```
 */
export default function isDate(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Date]'
}
