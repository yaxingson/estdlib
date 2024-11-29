import { it, expect } from 'vitest'
import isUndefined from '../isUndefined'

it('1)', () => {
  expect(isUndefined(void 0)).toBeTruthy()
})

it('2)', () => {
  expect(isUndefined(null)).toBeFalsy()
})
