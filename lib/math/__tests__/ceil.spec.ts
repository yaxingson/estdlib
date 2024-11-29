import { it, expect } from 'vitest'
import ceil from '../ceil'

it('1)', () => {
  expect(ceil(4.006)).toBe(5)
})

it('2)', () => {
  expect(ceil(6.004, 2)).toBe(6.01)
})

it('3)', () => {
  expect(ceil(6040, -2)).toBe(6100)
})
