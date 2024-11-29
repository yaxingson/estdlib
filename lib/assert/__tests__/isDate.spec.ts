import { it, expect } from 'vitest'
import isDate from '../isDate'

it('1)', () => {
  expect(isDate(new Date())).toBeTruthy()
})

it('2)', () => {
  expect(isDate('Mon April 23 2012')).toBeFalsy()
})
