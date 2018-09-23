import { createFit } from 'canvas-fit-margin-ts'
import { radialLabelPlacement } from '..'
import { Vec2 } from './types'
import { getTickData, strokeBoundingBox } from './utils'

const scale = window.devicePixelRatio || 1
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
const fit = createFit(canvas, { scale })
document.body.style.margin = '0'
document.body.appendChild(canvas)

const ticks = [
  { angle: 0, label: `0`, labelOffset: [0, 15] as Vec2 },
  { angle: 1 / 4, label: `π / 4`, labelOffset: [0, 35] as Vec2 },
  { angle: 1 / 2, label: `π / 2`, labelOffset: [0, 35] as Vec2 },
  { angle: 3 / 4, label: `3/4 π`, labelOffset: [0, 35] as Vec2 },
  { angle: 1, label: `π`, labelOffset: [0, 25] as Vec2 },
  { angle: 5 / 4, label: `5/4 π`, labelOffset: [-10, 0] as Vec2 },
  { angle: 3 / 2, label: `3/2 π`, labelOffset: [0, -95] as Vec2 },
  { angle: 7 / 4, label: `7/4 π`, labelOffset: [0, 0] as Vec2 },
]

function render(width: number, height: number) {
  const radius = Math.min(width, height) * 0.6

  const center: Vec2 = [canvas.width / 2, canvas.height / 2]

  context.fillStyle = 'black'
  context.strokeStyle = 'black'

  context.arc(center[0], center[1], radius, 0, Math.PI * 2)
  context.stroke()

  context.save()
  context.translate(...center)

  context.beginPath()
  context.moveTo(-10, 0)
  context.lineTo(10, 0)
  context.stroke()

  context.moveTo(0, -10)
  context.lineTo(0, 10)
  context.stroke()
  context.restore()

  getTickData(ticks, radius, center).forEach(tick => {
    context.fillStyle = 'black'
    context.strokeStyle = 'black'

    context.beginPath()
    context.moveTo(...tick.p1)
    context.lineTo(...tick.p2)
    context.stroke()

    const { textAlign, textBaseline } = radialLabelPlacement(tick.angle)

    context.font = '48px Inconsolata'
    context.textAlign = textAlign
    context.textBaseline = textBaseline
    context.fillText(tick.label, ...tick.p3)

    context.fillStyle = '#bbb'
    context.strokeStyle = '#bbb'

    const box = context.measureText(tick.label)
    strokeBoundingBox(context, tick.p3, box.width, 48, textAlign, textBaseline)

    context.moveTo(...tick.p3)
    context.arc(tick.p3[0], tick.p3[1], 4, 0, Math.PI * 2)
    context.fill()

    context.font = '18px Inconsolata'
    context.fillText(
      `textAlign: ${textAlign}`,
      tick.p3[0] + tick.labelOffset[0],
      tick.p3[1] + 22 + tick.labelOffset[1],
    )
    context.fillText(
      `textBaseline: ${textBaseline}`,
      tick.p3[0] + tick.labelOffset[0],
      tick.p3[1] + 44 + tick.labelOffset[1],
    )
  })
}

const onResize = () => {
  const [width, height] = fit()
  render(width, height)
}

window.addEventListener('resize', onResize)
document.onreadystatechange = function() {
  onResize()
}

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
} else {
}
