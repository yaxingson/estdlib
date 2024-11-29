/**
 *
 * @param value
 */
export default function isArray(value: unknown) {
  return Array.isArray
    ? Array.isArray(value)
    : Object.prototype.toString.call(value) === '[object Array]'
}
