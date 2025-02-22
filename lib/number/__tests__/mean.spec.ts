import { it, expect } from 'vitest'
import mean from '../mean'

it('1)', () => {
  expect(mean([1, 2, 3, 4, 5])).toBe(3)
})
