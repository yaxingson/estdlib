import { it, expect } from 'vitest'
import flatten from '../flatten'

it('1)', () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
})

it('2)', () => {
  expect(flatten([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5])
})

it('3)', () => {
  expect(flatten([1, [2, [3, [4]], 5]], Infinity)).toEqual([1, 2, 3, 4, 5])
})
