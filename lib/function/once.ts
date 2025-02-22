/**
 * Creates a function that is restricted to invoking func once
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/function/once.ts source}
 *
 * @param func - The function to restrict
 * @returns Returns the new restricted function
 *
 * @example
 *
 * ```js
 * const initialize = once(createApplication)
 *
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 *
 * ```
 */
export default function once(func: Function) {}
