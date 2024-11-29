import { it, expect } from 'vitest'
import isBuffer from '../isBuffer'

it('1)', () => {
  expect(isBuffer(Buffer.from('abc'))).toBeTruthy()
})

it('2)', () => {
  expect(isBuffer(new Uint8Array(2))).toBeFalsy()
})
