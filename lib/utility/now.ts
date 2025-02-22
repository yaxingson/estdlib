/**
 * Gets the timestamp of the number of milliseconds that have elapsed
 * since the Unix epoch (1 January 1970 00:00:00 UTC)
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/utility/now.ts source}
 *
 * @returns Returns the timestamp
 */
export default function now() {
  return Date.now()
}
