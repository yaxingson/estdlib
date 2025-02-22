[estdlib v0.1.2](../wiki/Home) / [assert](../wiki/assert) / isError

# Function: isError()

> **isError**(`value`): `boolean`

Checks if value is an Error, EvalError, RangeError, ReferenceError,
SyntaxError, TypeError, or URIError object

## Parameters

• **value**: `unknown`

The value to check

## Returns

`boolean`

- Returns true if value is an error object, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/assert/isError.ts)

## Example

```js
isError(new Error)
// => true

isError(Error)
// => false

```
