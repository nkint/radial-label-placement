export const isInRange = (x: number, minMax: number[]): boolean => x >= minMax[0] && x <= minMax[1]

export function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

export function radToDeg(rad: number): number {
  return rad * (180 / Math.PI)
}

export function degToRad(deg: number): number {
  return deg * (Math.PI / 180)
}
