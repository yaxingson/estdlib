import { it, expect } from 'vitest'
import pad from '../pad'

it('1)', () => {
  expect(pad('abc', 8)).toBe('  abc   ')
})

it('2)', () => {
  expect(pad('abc', 8, '_-')).toBe('_-abc_-_')
})

it('3)', () => {
  expect(pad('abc', 3)).toBe('abc')
})
