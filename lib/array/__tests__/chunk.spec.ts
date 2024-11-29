import { it, expect } from 'vitest'
import chunk from '../chunk'

it('1)', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
    ['a', 'b'],
    ['c', 'd']
  ])
})

it('2)', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
})
