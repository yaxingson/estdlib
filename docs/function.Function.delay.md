[estdlib v0.1.2](../wiki/Home) / [function](../wiki/function) / delay

# Function: delay()

> **delay**(`func`, `wait`, ...`args`): `void`

Invokes func after wait milliseconds

## Parameters

• **func**: `Function`

The function to delay

• **wait**: `number`

The number of milliseconds to delay invocation

• ...**args**: `unknown`[]

The arguments to invoke func with

## Returns

`void`

Returns the timer id

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/function/delay.ts)

## Example

```js
delay(function(text) {
 console.log(text)
}, 1000, 'later')
// => Logs 'later' after one second

```
