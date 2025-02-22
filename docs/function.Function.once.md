[estdlib v0.1.2](../wiki/Home) / [function](../wiki/function) / once

# Function: once()

> **once**(`func`): `void`

Creates a function that is restricted to invoking func once

## Parameters

• **func**: `Function`

The function to restrict

## Returns

`void`

Returns the new restricted function

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/function/once.ts)

## Example

```js
const initialize = once(createApplication)

initialize()
initialize()
// => `createApplication` is invoked once

```
