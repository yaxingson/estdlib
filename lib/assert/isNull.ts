/**
 * Checks if value is null
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isNull.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is null, else false
 *
 * @example
 *
 * ```js
 * isNull(null) // => true
 *
 * isNull(void 0) // => false
 *
 * ```
 */
export default function isNull(value: unknown) {
  return value === null
}
