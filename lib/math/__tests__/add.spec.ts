import { it, expect } from 'vitest'
import add from '../add'

it('1)', () => {
  expect(add(6, 4)).toBe(10)
})
