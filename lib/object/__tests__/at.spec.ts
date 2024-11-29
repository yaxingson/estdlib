import { it, expect } from 'vitest'
import at from '../at'

it('1)', () => {
  const obj = { a: [{ b: { c: 3 } }, 4] }
  expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([3, 4])
})
