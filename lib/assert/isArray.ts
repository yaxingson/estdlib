/**
 * Checks if value is classified as an Array object
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/assert/isArray.ts source}
 *
 * @param value - The value to check
 * @returns - Returns true if value is an array, else false
 *
 * @example
 *
 * ```js
 * isArray([1, 2, 3])
 * // => true
 *
 * isArray(document.body.children)
 * // => false
 *
 * isArray('abc')
 * // => false
 *
 * isArray(()=>{})
 * // => false
 *
 * ```
 */
export default function isArray(value: unknown) {
  return Array.isArray
    ? Array.isArray(value)
    : Object.prototype.toString.call(value) === '[object Array]'
}
