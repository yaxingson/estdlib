/**
 * Checks if value is an Error, EvalError, RangeError, ReferenceError,
 * SyntaxError, TypeError, or URIError object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isError.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is an error object, else false
 *
 * @example
 *
 * ```js
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 *
 * ```
 */
export default function isError(value: unknown) {}
