[estdlib v0.1.2](../wiki/Home) / [assert](../wiki/assert) / isDate

# Function: isDate()

> **isDate**(`value`): `boolean`

Checks if value is classified as a Date object

## Parameters

• **value**: `unknown`

The value to check

## Returns

`boolean`

- Returns true if value is a date object, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/assert/isDate.ts)

## Example

```js
isDate(new Date)
// => true

isDate('Mon April 23 2012')
// => false

```
