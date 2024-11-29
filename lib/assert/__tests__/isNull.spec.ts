import { it, expect } from 'vitest'
import isNull from '../isNull'

it('1)', () => {
  expect(isNull(null)).toBeTruthy()
})

it('2)', () => {
  expect(isNull(void 0)).toBeFalsy()
})
