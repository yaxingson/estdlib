import { it, expect, vi } from 'vitest'
import each from '../each'

it('1)', () => {
  const fn = vi.fn(v => v ** 2)

  each([1, 2], fn)

  expect(fn.mock.calls.length).toBe(2)
  expect(fn.mock.results[0]).toBe(1)
  expect(fn.mock.results[1]).toBe(4)
})

it('2)', () => {
  const pairs: unknown[] = []
  const fn = vi.fn((v, k) => pairs.push([k, v]))

  each({ a: 1, b: 2 }, fn)

  expect(fn.mock.calls.length).toBe(2)
  expect(pairs).toEqual([
    ['a', 1],
    ['b', 2]
  ])
})
