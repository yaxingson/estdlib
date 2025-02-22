import { it, expect } from 'vitest'
import template from '../template'

it('1)', () => {
  const compiled = template('hello <%= user %>!')
  expect(compiled({ user: 'fred' })).toBe('hello fred!')
})

it('2)', () => {
  const compiled = template('<b><%- value %></b>')
  expect(compiled({ value: '<script>' })).toBe('<b>&lt;script&gt;</b>')
})

it('3)', () => {
  const compiled = template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>')
  expect(compiled({ users: ['fred', 'barney'] })).toBe('<li>fred</li><li>barney</li>')
})

it('4)', () => {
  const compiled = template('<% print("hello " + user); %>!')
  expect(compiled({ user: 'barney' })).toBe('hello barney!')
})

it('5)', () => {
  const compiled = template('hello ${ user }!')
  expect(compiled({ user: 'pebbles' })).toBe('hello pebbles!')
})
