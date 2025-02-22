[estdlib v0.1.2](../wiki/Home) / [number](../wiki/number) / inRange

# Function: inRange()

> **inRange**(`num`, `start`, `end`?): `void`

Checks if n is between start and up to, but not including end

## Parameters

• **num**: `number`

The number to check.

• **start**: `number`

The start of the range

• **end?**: `number`

The end of the range

## Returns

`void`

Returns true if number is in the range, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/number/inRange.ts)

## Example

```js
inRange(3, 2, 4) // => true

inRange(4, 8) // => true

inRange(2, 2) // => false

inRange(5.2, 4) // => false

inRange(-3, -2, -6) // => true

```
