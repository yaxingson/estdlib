[estdlib v0.1.2](../wiki/Home) / [object](../wiki/object) / update

# Function: update()

> **update**(`obj`, `path`, `updater`): `void`

Sets the value at path of object, that accepts updater to produce the value to set

## Parameters

• **obj**: `Object`

The object to modify

• **path**: `string` \| `string`[]

The path of the property to set

• **updater**

The function to produce the updated value

## Returns

`void`

Returns object

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/object/update.ts)

## Example

```js
const obj = { 'a': [{ 'b': { 'c': 3 } }] }

update(obj, 'a[0].b.c', v => v*v)

console.log(obj.a[0].b.c) // => 9

update(obj, 'x[0].y.z', v => v ? v+1 : 0)

console.log(obj.x[0].y.z) // => 0

```
