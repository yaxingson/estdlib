import { it, expect } from 'vitest'
import random from '../random'

it('1)', () => {
  const value = random(0, 5)

  expect(value).toBeGreaterThanOrEqual(0)
  expect(value).toBeLessThan(5)
})
