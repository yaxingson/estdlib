import { it, expect } from 'vitest'
import isError from '../isError'

it('1)', () => {
  expect(isError(new Error())).toBeTruthy()
})

it('2)', () => {
  expect(isError(Error)).toBeFalsy()
})
