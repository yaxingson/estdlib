[estdlib v0.1.2](../wiki/Home) / [string](../wiki/string) / kebabCase

# Function: kebabCase()

> **kebabCase**(`str`): `void`

Converts string to kebab case

## Parameters

• **str**: `string`

The string to convert

## Returns

`void`

Returns the kebab cased string

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/string/kebabCase.ts)

## Example

```js
kebabCase('Foo Bar') // => 'foo-bar'

kebabCase('fooBar') // => 'foo-bar'

kebabCase('__FOO_BAR__') // => 'foo-bar'

```
