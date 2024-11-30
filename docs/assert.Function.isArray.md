[estdlib v0.1.2](../wiki/Home) / [assert](../wiki/assert) / isArray

# Function: isArray()

> **isArray**(`value`): `boolean`

Checks if value is classified as an Array object

## Parameters

• **value**: `unknown`

The value to check

## Returns

`boolean`

- Returns true if value is an array, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/assert/isArray.ts)

## Example

```js
isArray([1, 2, 3])
// => true

isArray(document.body.children)
// => false

isArray('abc')
// => false

isArray(()=>{})
// => false

```
