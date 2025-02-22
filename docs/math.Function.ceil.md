[estdlib v0.1.2](../wiki/Home) / [math](../wiki/math) / ceil

# Function: ceil()

> **ceil**(`num`, `precision`): `void`

Computes number rounded up to precision

## Parameters

• **num**: `number`

The number to round up

• **precision**: `number` = `0`

The precision to round up to

## Returns

`void`

Returns the rounded up number

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/math/ceil.ts)

## Example

```js
ceil(4.006) // => 5

ceil(6.004, 2) // => 6.01

ceil(6040, -2) // => 6100

```
