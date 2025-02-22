import { it, expect } from 'vitest'
import escape from '../escape'

it('1)', () => {
  expect(escape('fred, barney, & pebbles')).toBe('fred, barney, &amp; pebbles')
})
