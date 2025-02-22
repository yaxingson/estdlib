[estdlib v0.1.2](../wiki/Home) / [function](../wiki/function) / partial

# Function: partial()

> **partial**(`func`, ...`partials`): `void`

Creates a function that invokes func with partials prepended to the arguments it receives

## Parameters

• **func**: `Function`

The function to partially apply arguments to

• ...**partials**: `unknown`[]

The arguments to be partially applied

## Returns

`void`

Returns the new partially applied function

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/function/partial.ts)

## Example

```js
function greet(greeting, name) {
 return greeting + ' ' + name
}

const sayHelloTo = partial(greet, 'hello')
sayHelloTo('fred') // => 'hello fred'

const greetFred = partial(greet, _, 'fred')
greetFred('hi')  // => 'hi fred'

```
