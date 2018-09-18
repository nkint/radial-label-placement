import { createFit } from 'canvas-fit-margin-ts'

const scale = window.devicePixelRatio || 1
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
const fit = createFit(canvas, { scale })
document.body.style.margin = '0'
document.body.appendChild(canvas)

function render(width: number, height: number) {
  const gradient = context.createLinearGradient(0, 0, width, 0)
  gradient.addColorStop(0, '#00b4db')
  gradient.addColorStop(1, '#0083b0')

  context.clearRect(0, 0, width, height)

  context.fillStyle = gradient
  context.fillRect(0, 0, width, height)
}

const onResize = () => {
  const [width, height] = fit()
  render(width, height)
}

onResize()
window.addEventListener('resize', onResize)
