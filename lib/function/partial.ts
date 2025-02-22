/**
 * Creates a function that invokes func with partials prepended to the arguments it receives
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/function/partial.ts source}
 *
 * @param func - The function to partially apply arguments to
 * @param partials - The arguments to be partially applied
 * @returns Returns the new partially applied function
 *
 * @example
 *
 * ```js
 * function greet(greeting, name) {
 *  return greeting + ' ' + name
 * }
 *
 * const sayHelloTo = partial(greet, 'hello')
 * sayHelloTo('fred') // => 'hello fred'
 *
 * const greetFred = partial(greet, _, 'fred')
 * greetFred('hi')  // => 'hi fred'
 *
 * ```
 */
export default function partial(func: Function, ...partials: unknown[]) {}
