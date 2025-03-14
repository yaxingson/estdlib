import { it, expect } from 'vitest'
import toPairs from '../toPairs'

it('1)', () => {
  class Foo {
    [x: string]: number
    a = 1
    b = 2
  }

  Foo.prototype.c = 3

  expect(toPairs(new Foo())).toEqual([
    ['a', 1],
    ['b', 2]
  ])
})
