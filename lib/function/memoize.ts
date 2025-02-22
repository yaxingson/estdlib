/**
 * Creates a function that memoizes the result of func
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/function/memoize.ts source}
 *
 * @param func - The function to have its output memoized
 * @param resolver - The function to resolve the cache key
 * @returns Returns the new memoized function
 *
 * @example
 *
 * ```js
 * const obj = { a:1, b:2 }
 * const other = { c:3, d:4 }
 *
 * ```
 */
export default function memoize(func: Function, resolver?: Function) {}
