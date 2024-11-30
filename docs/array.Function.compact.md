[estdlib v0.1.2](../wiki/Home) / [array](../wiki/array) / compact

# Function: compact()

> **compact**(`array`): `void`

Creates an array with all falsey values removed

## Parameters

• **array**: `unknown`[]

The array to compact

## Returns

`void`

- Returns the new array of filtered values

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/array/compact.ts)

## Example

```js
compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]

```
