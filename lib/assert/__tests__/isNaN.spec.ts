import { it, expect } from 'vitest'
import isNaN from '../isNaN'

it('1)', () => {
  expect(isNaN(NaN)).toBeTruthy()
})

it('2)', () => {
  expect(isNaN(new Number(NaN))).toBeTruthy()
})

it('3)', () => {
  expect(isNaN(undefined)).toBeFalsy()
})
