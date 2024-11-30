[estdlib v0.1.2](../wiki/Home) / [assert](../wiki/assert) / isBoolean

# Function: isBoolean()

> **isBoolean**(`value`): `boolean`

Checks if value is classified as a boolean primitive or object

## Parameters

• **value**: `unknown`

The value to check

## Returns

`boolean`

- Returns true if value is a boolean, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/assert/isBoolean.ts)

## Example

```js
isBoolean(false)
// => true

isBoolean(null)
// => false

```
