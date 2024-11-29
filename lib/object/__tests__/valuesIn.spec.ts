import { it, expect } from 'vitest'
import valuesIn from '../valuesIn'

it('1)', () => {
  class Foo {
    [x: string]: number
    a = 1
    b = 2
  }

  Foo.prototype.c = 3

  expect(valuesIn(new Foo())).toEqual([1, 2, 3])
})
