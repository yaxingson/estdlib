/**
 * Invokes the iteratee n times, returning an array of the results of each invocation
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/utility/times.ts source}
 *
 * @param n - The number of times to invoke iteratee
 * @param iteratee - The function invoked per iteration
 * @returns  Returns the array of results
 *
 * @example
 *
 * ```js
 * times(3, String) // => ['0', '1', '2']
 *
 * times(4, ()=>0) // => [0, 0, 0, 0]
 *
 * ```
 */
export default function times<T>(n: number, iteratee: (index: number) => T): T[] {
  const result: T[] = []

  for (let i = 0; i < n; i++) {
    result.push(iteratee(i))
  }

  return result
}
