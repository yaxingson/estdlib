[estdlib v0.1.2](../wiki/Home) / [object](../wiki/object) / at

# Function: at()

> **at**(`obj`, `paths`): `void`

Creates an array of values corresponding to paths of object

## Parameters

• **obj**: `Object`

The object to iterate over

• **paths**: `string`[]

The property paths to pick

## Returns

`void`

Returns the picked values

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/object/at.ts)

## Example

```js
const obj = { 'a': [{ 'b': { 'c': 3 } }, 4] }

at(object, ['a[0].b.c', 'a[1]'])
// => [3, 4]

```
