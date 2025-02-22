[estdlib v0.1.2](../wiki/Home) / [number](../wiki/number) / round

# Function: round()

> **round**(`num`, `precision`): `void`

Round a number to the specified precision

## Parameters

• **num**: `number`

The number to be rounded

• **precision**: `number` = `0`

The decimal place

## Returns

`void`

Returns the number after rounding

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/number/round.ts)

## Example

```js
round(1.2345) // => 1

round(1.2345, 2) // => 1.23

round(1.2345, 3) // => 1.235

```
