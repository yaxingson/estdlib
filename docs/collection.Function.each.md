[estdlib v0.1.2](../wiki/Home) / [collection](../wiki/collection) / each

# Function: each()

> **each**\<`T`\>(`collection`, `iteratee`?): `void`

Iterates over elements of collection and invokes iteratee for each element

## Type Parameters

• **T**

## Parameters

• **collection**: `object` \| `T`[]

The collection to iterate over

• **iteratee?**: `Function`

The function invoked per iteration

## Returns

`void`

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/collection/each.ts)

## Example

```js
each([1, 2], val=>console.log(val))
// => Logs `1` then `2`

each({a:1, b:2}, (val, key)=>console.log(key))
// => Logs 'a' then 'b' (iteration order is not guaranteed)

```
