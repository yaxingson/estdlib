import { it, expect } from 'vitest'
import isArray from '../isArray'

it('1)', () => {
  expect(isArray([1, 2, 3])).toBeTruthy()
})

it('2)', () => {
  expect(isArray(document.body.children)).toBeFalsy()
})

it('3)', () => {
  expect(isArray('abc')).toBeFalsy()
})

it('4)', () => {
  expect(isArray(() => {})).toBeFalsy()
})
