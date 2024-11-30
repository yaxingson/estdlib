[estdlib v0.1.2](../wiki/Home) / [collection](../wiki/collection) / filter

# Function: filter()

> **filter**\<`T`\>(`collection`, `predicate`?): `void`

Iterates over elements of collection, returning an array of all elements
predicate returns truthy for

## Type Parameters

• **T**

## Parameters

• **collection**: `T`[]

The collection to iterate over

• **predicate?**: `Function`

## Returns

`void`

Returns the new filtered array

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/collection/filter.ts)

## Example

```js
const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
]

filter(users, u=>!u.active)
// => objects for ['fred']

filter(users, { 'age': 36, 'active': true })
// => objects for ['barney']

filter(users, ['active', false])
// => objects for ['fred']

filter(users, 'active')
// => objects for ['barney']

```
