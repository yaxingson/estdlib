[estdlib v0.1.2](../wiki/Home) / [assert](../wiki/assert) / isNaN

# Function: isNaN()

> **isNaN**(`value`): `void`

Checks if value is NaN

## Parameters

• **value**: `unknown`

The value to check

## Returns

`void`

- Returns true if value is NaN, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/assert/isNaN.ts)

## Example

```js
isNaN(NaN) // => true

isNaN(new Number(NaN)) // => true

isNaN(undefined) // => false

```
