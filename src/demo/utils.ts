import { Vec2, Align, Baseline } from './types'

export function pointOnCircle(angle: number, radius: number, center: Vec2): Vec2 {
  return [Math.cos(angle) * radius + center[0], Math.sin(angle) * radius + center[1]]
}

export function getTickData(
  ticks: { angle: number; label: string; labelOffset: Vec2 }[],
  radius: number,
  center: Vec2,
) {
  return ticks.map(tick => {
    const angle = tick.angle * Math.PI
    const p1: Vec2 = pointOnCircle(angle, radius, center)
    const p2: Vec2 = pointOnCircle(angle, radius - 25, center)
    const p3: Vec2 = pointOnCircle(angle, radius + 15, center)
    return { ...tick, angle, p1, p2, p3 }
  })
}

export function strokeBoundingBox(
  context: CanvasRenderingContext2D,
  point: Vec2,
  width: number,
  height: number,
  textAlign: Align,
  textBaseline: Baseline,
) {
  context.strokeRect(
    point[0] + offsetX[textAlign](width),
    point[1] + offsetY[textBaseline](height),
    width,
    height,
  )
}

export const offsetX = {
  start: (w: number) => 0,
  center: (w: number) => -w / 2,
  end: (w: number) => -w,
}

export const offsetY = {
  top: (h: number) => 0,
  middle: (h: number) => -h / 2,
  bottom: (h: number) => -h,
}
