import test from 'ava'
import { radialLabelPlacement } from '../src'

test(t => {
  const expected = [
    { textAlign: 'start', textBaseline: 'middle' },
    { textAlign: 'start', textBaseline: 'top' },
    { textAlign: 'center', textBaseline: 'top' },
    { textAlign: 'end', textBaseline: 'top' },
    { textAlign: 'end', textBaseline: 'middle' },
    { textAlign: 'end', textBaseline: 'bottom' },
    { textAlign: 'center', textBaseline: 'bottom' },
    { textAlign: 'start', textBaseline: 'bottom' },
    { textAlign: 'start', textBaseline: 'bottom' },
  ]

  const input = [0, 1 / 4, 1 / 2, 3 / 4, 1, 5 / 4, 3 / 2, 7 / 4, 2].map(x => x * Math.PI)

  const output = input.map(radialLabelPlacement)

  t.deepEqual(expected, output)
})
