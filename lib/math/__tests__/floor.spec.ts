import { it, expect } from 'vitest'
import floor from '../floor'

it('1)', () => {
  expect(floor(4.006)).toBe(4)
})

it('2)', () => {
  expect(floor(0.046, 2)).toBe(0.04)
})

it('3)', () => {
  expect(floor(4060, -2)).toBe(4000)
})
