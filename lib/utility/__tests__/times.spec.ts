import { it, expect } from 'vitest'
import times from '../times'

it('1)', () => {
  expect(times(3, String)).toEqual(['0', '1', '2'])
})

it('2)', () => {
  expect(times(4, () => 0)).toEqual([0, 0, 0, 0])
})
