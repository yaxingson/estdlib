[estdlib v0.1.2](../wiki/Home) / [string](../wiki/string) / pad

# Function: pad()

> **pad**(`str`, `length`, `chars`): `void`

Pads string on the left and right sides if it's shorter than length

## Parameters

• **str**: `string`

The string to pad

• **length**: `number` = `0`

The padding length

• **chars**: `string` = `' '`

The string used as padding

## Returns

`void`

Returns the padded string

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/string/pad.ts)

## Example

```js
pad('abc', 8) // => '  abc   '

pad('abc', 8, '_-') // => '_-abc_-_'

pad('abc', 3) // => 'abc'

```
