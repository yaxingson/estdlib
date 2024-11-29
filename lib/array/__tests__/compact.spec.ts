import { it, expect } from 'vitest'
import compact from '../compact'

it('1)', () => {
  expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
})
