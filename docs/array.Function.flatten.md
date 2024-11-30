[estdlib v0.1.2](../wiki/Home) / [array](../wiki/array) / flatten

# Function: flatten()

> **flatten**(`array`, `depth`): `void`

Recursively flatten array up to depth times

## Parameters

• **array**: `unknown`[]

The array to flatten

• **depth**: `number` = `1`

The maximum recursion depth

## Returns

`void`

- Returns the new flattened array

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/array/flatten.ts)

## Example

```js
const arr = [1, [2, [3, [4]], 5]]

flatten(arr)
// => [1, 2, [3, [4]], 5]

flatten(arr, 2)
// => [1, 2, 3, [4], 5]

flatten(arr, Infinity)
// => [1, 2, 3, 4, 5]

```
