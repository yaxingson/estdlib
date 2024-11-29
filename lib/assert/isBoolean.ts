/**
 *
 * @param value
 */
export default function isBoolean(value: unknown) {
  return typeof value === 'boolean' || Object.prototype.toString.call(value) === '[object Boolean]'
}
