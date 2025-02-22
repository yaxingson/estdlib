[estdlib v0.1.2](../wiki/Home) / [string](../wiki/string) / camelCase

# Function: camelCase()

> **camelCase**(`str`): `void`

Converts string to camel case

## Parameters

• **str**: `string`

The string to convert

## Returns

`void`

Returns the camel cased string

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/string/camelCase.ts)

## Example

```js
camelCase('Foo Bar') // => 'fooBar'

camelCase('--foo-bar--') // => 'foobar'

camelCase('--FOO-BAR--') // => 'foobar'

```
