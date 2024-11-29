import { it, expect } from 'vitest'
import max from '../max'

it('1)', () => {
  expect(max([4, 2, 8, 6])).toBe(8)
})

it('2)', () => {
  expect(max([])).toBe(undefined)
})
