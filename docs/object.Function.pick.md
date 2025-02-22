[estdlib v0.1.2](../wiki/Home) / [object](../wiki/object) / pick

# Function: pick()

> **pick**(`obj`, `paths`): `void`

Creates an object composed of the picked object properties

## Parameters

• **obj**: `Object`

The source object

• **paths**: `string` \| `string`[]

The property paths to pick

## Returns

`void`

Returns the new object

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/object/pick.ts)

## Example

```js
const obj = { 'a': 1, 'b': '2', 'c': 3 }

pick(obj, ['a', 'c'])
// => {'a':1, 'c':3}

```
