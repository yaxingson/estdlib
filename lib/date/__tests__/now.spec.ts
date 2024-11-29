import { it, expect } from 'vitest'
import now from '../now'

it('1)', () => {
  expect(now()).toBeLessThanOrEqual(Date.now())
})
