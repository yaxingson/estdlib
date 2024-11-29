import { it, expect } from 'vitest'
import isBoolean from '../isBoolean'

it('1)', () => {
  expect(isBoolean(false)).toBeTruthy()
})

it('2)', () => {
  expect(isBoolean(null)).toBeFalsy()
})
