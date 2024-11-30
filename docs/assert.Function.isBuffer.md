[estdlib v0.1.2](../wiki/Home) / [assert](../wiki/assert) / isBuffer

# Function: isBuffer()

> **isBuffer**(`value`): `void`

Checks if value is a buffer

## Parameters

• **value**: `unknown`

The value to check

## Returns

`void`

- Returns true if value is a buffer, else false

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/assert/isBuffer.ts)

## Example

```js
isBuffer(Buffer.from('abc'))
// => true

isBuffer(new Uint8Array(2))
// => false

```
