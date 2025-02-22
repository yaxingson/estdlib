import { it, expect } from 'vitest'
import inRange from '../inRange'

it('1)', () => {
  expect(inRange(3, 2, 4)).toBeTruthy()
})

it('2)', () => {
  expect(inRange(4, 8)).toBeTruthy()
})

it('3)', () => {
  expect(inRange(2, 2)).toBeFalsy()
})

it('4)', () => {
  expect(inRange(5.2, 4)).toBeFalsy()
})

it('5)', () => {
  expect(inRange(-3, -2, -6)).toBeTruthy()
})
