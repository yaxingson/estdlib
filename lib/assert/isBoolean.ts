/**
 * Checks if value is classified as a boolean primitive or object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isBoolean.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is a boolean, else false
 *
 * @example
 *
 * ```js
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 *
 * ```
 */
export default function isBoolean(value: unknown) {
  return typeof value === 'boolean' || Object.prototype.toString.call(value) === '[object Boolean]'
}
