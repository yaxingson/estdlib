/**
 * Checks if value is a buffer
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isBuffer.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is a buffer, else false
 *
 * @example
 *
 * ```js
 * isBuffer(Buffer.from('abc'))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 *
 * ```
 */
export default function isBuffer(value: unknown) {}
