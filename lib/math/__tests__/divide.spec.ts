import { it, expect } from 'vitest'
import divide from '../divide'

it('1)', () => {
  expect(divide(6, 4)).toBe(1.5)
})
