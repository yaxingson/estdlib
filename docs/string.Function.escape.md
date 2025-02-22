[estdlib v0.1.2](../wiki/Home) / [string](../wiki/string) / escape

# Function: escape()

> **escape**(`str`): `void`

Converts the characters "&", "<", ">", '"', and "'" in string to their
corresponding HTML entities

## Parameters

• **str**: `string`

The string to escape

## Returns

`void`

Returns the escaped string

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/string/escape.ts)

## Example

```js
escape('fred, barney, & pebbles') // => 'fred, barney, &amp; pebbles'

```
