/**
 * Invokes func after wait milliseconds
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/function/delay.ts source}
 *
 * @param func - The function to delay
 * @param wait - The number of milliseconds to delay invocation
 * @param args - The arguments to invoke func with
 * @returns Returns the timer id
 *
 * @example
 *
 * ```js
 * delay(function(text) {
 *  console.log(text)
 * }, 1000, 'later')
 * // => Logs 'later' after one second
 *
 * ```
 */
export default function delay(func: Function, wait: number, ...args: unknown[]) {}
