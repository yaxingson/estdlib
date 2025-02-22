[estdlib v0.1.2](../wiki/Home) / [object](../wiki/object) / toPairs

# Function: toPairs()

> **toPairs**(`obj`): `void`

Creates an array of own enumerable string keyed-value pairs for object

## Parameters

• **obj**: `Object`

The object to query

## Returns

`void`

Returns the key-value pairs

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/object/toPairs.ts)

## Example

```js
function Foo() {
 this.a = 1
 this.b = 2
}

Foo.prototype.c = 3

toPairs(new Foo) // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)

```
