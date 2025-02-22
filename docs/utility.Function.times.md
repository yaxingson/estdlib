[estdlib v0.1.2](../wiki/Home) / [utility](../wiki/utility) / times

# Function: times()

> **times**\<`T`\>(`n`, `iteratee`): `T`[]

Invokes the iteratee n times, returning an array of the results of each invocation

## Type Parameters

• **T**

## Parameters

• **n**: `number`

The number of times to invoke iteratee

• **iteratee**

The function invoked per iteration

## Returns

`T`[]

Returns the array of results

## Since

0.1.2

## See

[source](https://github.com/yaxingson/estdlib/blob/main/lib/utility/times.ts)

## Example

```js
times(3, String) // => ['0', '1', '2']

times(4, ()=>0) // => [0, 0, 0, 0]

```
