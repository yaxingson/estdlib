[estdlib v0.1.2](../wiki/Home) / [function](../wiki/function) / bind

# Function: bind()

> **bind**(`func`, `thisArg`, ...`partials`): `void`

Creates a function that invokes func with the this binding of thisArg and
partials prepended to the arguments it receives

## Parameters

• **func**: `Function`

The function to bind

• **thisArg**: `unknown`

The this binding of func

• ...**partials**: `unknown`[]

The arguments to be partially applied

## Returns

`void`

Returns the new bound function

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/function/bind.ts)

## Example

```js
function greet(greeting, punctuation) {
 return greeting + ' ' + this.user + punctuation
}

const obj = {user:'fred'}

const bound = bind(greet, obj, 'hi')

bound('!') // => 'hi fred!'

const bound = bind(greet, obj, _, '!')

bound('hi') // => 'hi fred!'

```
