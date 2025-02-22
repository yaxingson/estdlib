import { it, expect } from 'vitest'
import kebabCase from '../kebabCase'

it('1)', () => {
  expect(kebabCase('Foo Bar')).toBe('foo-bar')
})

it('2)', () => {
  expect(kebabCase('fooBar')).toBe('foo-bar')
})

it('3)', () => {
  expect(kebabCase('__FOO_BAR__')).toBe('foo-bar')
})
