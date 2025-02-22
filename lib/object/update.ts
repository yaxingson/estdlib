/**
 * Sets the value at path of object, that accepts updater to produce the value to set
 *
 * @since 0.1.2
 * @see {@link https://github.com/yaxingson/estdlib/blob/main/lib/object/update.ts source}
 *
 * @param obj - The object to modify
 * @param path - The path of the property to set
 * @param updater - The function to produce the updated value
 * @returns Returns object
 *
 * @example
 *
 * ```js
 * const obj = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * update(obj, 'a[0].b.c', v => v*v)
 *
 * console.log(obj.a[0].b.c) // => 9
 *
 * update(obj, 'x[0].y.z', v => v ? v+1 : 0)
 *
 * console.log(obj.x[0].y.z) // => 0
 *
 * ```
 */
export default function update(obj: Object, path: string[] | string, updater: (v: any) => any) {}
