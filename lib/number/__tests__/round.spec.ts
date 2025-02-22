import { it, expect } from 'vitest'
import round from '../round'

it('1)', () => {
  expect(round(1.2345)).toBe(1)
})

it('2)', () => {
  expect(round(1.2345, 2)).toBe(1.23)
})

it('3)', () => {
  expect(round(1.2345, 3)).toBe(1.235)
})
