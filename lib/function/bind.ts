/**
 * Creates a function that invokes func with the this binding of thisArg and
 * partials prepended to the arguments it receives
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/function/bind.ts source}
 *
 * @param func - The function to bind
 * @param thisArg - The this binding of func
 * @param partials - The arguments to be partially applied
 * @returns Returns the new bound function
 *
 * @example
 *
 * ```js
 * function greet(greeting, punctuation) {
 *  return greeting + ' ' + this.user + punctuation
 * }
 *
 * const obj = {user:'fred'}
 *
 * const bound = bind(greet, obj, 'hi')
 *
 * bound('!') // => 'hi fred!'
 *
 * const bound = bind(greet, obj, _, '!')
 *
 * bound('hi') // => 'hi fred!'
 *
 * ```
 */
export default function bind(func: Function, thisArg: unknown, ...partials: unknown[]) {}
