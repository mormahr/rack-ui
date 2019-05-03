export function positionToRadius(
  angleDegrees: number,
  radius: number,
  cx: number,
  cy: number = cx,
  base: number = 90,
): [number, number] {
  const angle = ((angleDegrees - base) * Math.PI) / 180.0

  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]
}
