import { it, expect } from 'vitest'
import pick from '../pick'

it('1)', () => {
  const obj = { a: 1, b: '2', c: 3 }

  expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
})
