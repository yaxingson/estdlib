import { it, expect } from 'vitest'
import drop from '../drop'

it('1)', () => {
  expect(drop([1, 2, 3])).toEqual([2, 3])
})

it('2)', () => {
  expect(drop([1, 2, 3], 2)).toEqual([3])
})

it('3)', () => {
  expect(drop([1, 2, 3], 5)).toEqual([])
})

it('4)', () => {
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
})
