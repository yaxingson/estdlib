[estdlib v0.1.2](../wiki/Home) / [math](../wiki/math) / floor

# Function: floor()

> **floor**(`num`, `precision`): `void`

Computes number rounded down to precision

## Parameters

• **num**: `number`

The number to round down

• **precision**: `number` = `0`

The precision to round down to

## Returns

`void`

Returns the rounded down number

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/math/floor.ts)

## Example

```js
floor(4.006) // => 4

floor(0.046, 2) // => 0.04

floor(4060, -2) // => 4000

```
