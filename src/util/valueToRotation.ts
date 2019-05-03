export function valueToRotation(value: number, openingAngle: number) {
  return (value - 0.5) * 2 * openingAngle
}
