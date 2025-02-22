/**
 * Checks if value is undefined
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isUndefined.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is undefined, else false
 *
 * @example
 *
 * ```js
 * isUndefined(void 0) // => true
 *
 * isUndefined(null) // => false
 *
 * ```
 */
export default function isUndefined(value: unknown) {
  return value === void 0
}
