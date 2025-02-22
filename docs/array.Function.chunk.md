[estdlib v0.1.2](../wiki/Home) / [array](../wiki/array) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `void`

Creates an array of elements split into groups the length of size

## Type Parameters

• **T**

## Parameters

• **array**: `unknown`[]

The array to process

• **size**: `number` = `1`

The length of each chunk

## Returns

`void`

- Returns the new array of chunks

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/array/chunk.ts)

## Example

```js
chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

```
