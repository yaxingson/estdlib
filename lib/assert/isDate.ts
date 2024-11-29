/**
 *
 * @param value
 */
export default function isDate(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Date]'
}
