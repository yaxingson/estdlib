import { it, expect } from 'vitest'
import update from '../update'

it('1)', () => {
  const obj = { a: [{ b: { c: 3 } }] }

  update(obj, 'a[0].b.c', n => n * n)
  expect(obj.a[0].b.c).toBe(9)

  update(obj, 'x[0].y.z', n => (n ? n + 1 : 0))
  expect((obj as any).x[0].y.z).toBe(0)
})
