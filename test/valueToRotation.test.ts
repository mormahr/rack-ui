import { valueToRotation } from "../src/util/valueToRotation"

describe("valueToRotation", () => {
  it("left max", () => {
    expect(valueToRotation(0, 150)).toEqual(-150)
  })

  it("right max", () => {
    expect(valueToRotation(1, 150)).toEqual(150)
  })

  it("center", () => {
    expect(valueToRotation(0.5, 150)).toEqual(0)
  })

  it("between left", () => {
    expect(valueToRotation(0.25, 150)).toEqual(-75)
  })

  it("between right", () => {
    expect(valueToRotation(0.75, 150)).toEqual(75)
  })
})
