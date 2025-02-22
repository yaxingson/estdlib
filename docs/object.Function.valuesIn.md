[estdlib v0.1.2](../wiki/Home) / [object](../wiki/object) / valuesIn

# Function: valuesIn()

> **valuesIn**(`obj`): `void`

Creates an array of the own and inherited enumerable string keyed property values of object

## Parameters

• **obj**: `Object`

The object to query

## Returns

`void`

Returns the array of property values

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/object/valuesIn.ts)

## Example

```js
function Foo() {
 this.a = 1
 this.b = 2
}

Foo.prototype.c = 3

valuesIn(new Foo) // => [1, 2, 3] (iteration order is not guaranteed)

```
