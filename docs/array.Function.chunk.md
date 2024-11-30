[estdlib v0.1.2](../wiki/Home) / [array](../wiki/array) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `never`[]

Creates an array of elements split into groups the length of size

## Type Parameters

• **T**

## Parameters

• **array**: `T`[]

The array to process

• **size**: `number` = `1`

The length of each chunk

## Returns

`never`[]

- Returns the new array of chunks

## Since

0.1.2

## Example

```js
 console.log(chunk([1, 2, 3])) // [[1], [2], [3]]

```
