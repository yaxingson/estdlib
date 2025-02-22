[estdlib v0.1.2](../wiki/Home) / [array](../wiki/array) / drop

# Function: drop()

> **drop**(`array`, `n`): `void`

Creates a slice of array with n elements dropped from the beginning

## Parameters

• **array**: `unknown`[]

The array to query

• **n**: `number` = `1`

The number of elements to drop

## Returns

`void`

- Returns the slice of array

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/array/drop.ts)

## Example

```js
drop([1, 2, 3])
// => [2, 3]

drop([1, 2, 3], 2)
// => [3]

drop([1, 2, 3], 5)
// => []

drop([1, 2, 3], 0)
// => [1, 2, 3]

```
