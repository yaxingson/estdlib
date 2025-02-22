[estdlib v0.1.2](../wiki/Home) / [function](../wiki/function) / memoize

# Function: memoize()

> **memoize**(`func`, `resolver`?): `void`

Creates a function that memoizes the result of func

## Parameters

• **func**: `Function`

The function to have its output memoized

• **resolver?**: `Function`

The function to resolve the cache key

## Returns

`void`

Returns the new memoized function

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/function/memoize.ts)

## Example

```js
const obj = { a:1, b:2 }
const other = { c:3, d:4 }

```
