import { it, expect } from 'vitest'
import capitalize from '../capitalize'

it('1)', () => {
  expect(capitalize('FRED')).toBe('Fred')
})
