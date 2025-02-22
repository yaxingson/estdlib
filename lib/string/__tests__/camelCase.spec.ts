import { it, expect } from 'vitest'
import camelCase from '../camelCase'

it('1)', () => {
  expect(camelCase('Foo Bar')).toBe('fooBar')
})

it('2)', () => {
  expect(camelCase('--foo-bar--')).toBe('fooBar')
})

it('3)', () => {
  expect(camelCase('__FOO_BAR__')).toBe('fooBar')
})
