import test from 'ava'
import { radialLabelPlacement } from '../src'

test('common case', t => {
  const expected = [
    { textAlign: 'start', textBaseline: 'middle' },
    { textAlign: 'start', textBaseline: 'top' },
    { textAlign: 'center', textBaseline: 'top' },
    { textAlign: 'end', textBaseline: 'top' },
    { textAlign: 'end', textBaseline: 'middle' },
    { textAlign: 'end', textBaseline: 'bottom' },
    { textAlign: 'center', textBaseline: 'bottom' },
    { textAlign: 'start', textBaseline: 'bottom' },
    { textAlign: 'start', textBaseline: 'middle' },
  ]

  const input = [0, 1 / 4, 1 / 2, 3 / 4, 1, 5 / 4, 3 / 2, 7 / 4, 2].map(x => x * Math.PI)

  const output = input.map(radialLabelPlacement)

  t.deepEqual(expected, output)
})

test('Math.PI * 2 - 0.001', t => {
  const expected = { textAlign: 'start', textBaseline: 'bottom' }
  const input = Math.PI * 2 - 0.1
  const output = radialLabelPlacement(input)
  t.deepEqual(expected, output)
})

test('More then Math.PI * 2', t => {
  const expected = { textAlign: 'start', textBaseline: 'middle' }
  const input = [0.1, Math.PI * 2 + 0.1]

  input.forEach(i => {
    const output0 = radialLabelPlacement(i)
    t.deepEqual(expected, output0)
  })
})
