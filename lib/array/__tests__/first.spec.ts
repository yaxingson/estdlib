import { it, expect } from 'vitest'
import first from '../first'

it('1)', () => {
  expect(first([1, 2, 3])).toBe(1)
})

it('2)', () => {
  expect(first([])).toBe(undefined)
})
