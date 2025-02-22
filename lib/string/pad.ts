/**
 * Pads string on the left and right sides if it's shorter than length
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/string/pad.ts source}
 *
 * @param str - The string to pad
 * @param length - The padding length
 * @param chars - The string used as padding
 * @returns  Returns the padded string
 *
 * @example
 *
 * ```js
 * pad('abc', 8) // => '  abc   '
 *
 * pad('abc', 8, '_-') // => '_-abc_-_'
 *
 * pad('abc', 3) // => 'abc'
 *
 * ```
 */
export default function pad(str: string, length = 0, chars = ' ') {}
