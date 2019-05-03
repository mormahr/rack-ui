import { clamp } from "../src/util/clamp"

describe("clamp", () => {
  it("is below default min", () => {
    expect(clamp(-1)).toEqual(0)
  })

  it("is above default max", () => {
    expect(clamp(2)).toEqual(1)
  })

  it("is between default bounds", () => {
    expect(clamp(0.5)).toEqual(0.5)
  })

  it("is below custom min", () => {
    expect(clamp(0, 5, 10)).toEqual(5)
  })

  it("is above custom max", () => {
    expect(clamp(20, 5, 10)).toEqual(10)
  })

  it("is between custom bounds", () => {
    expect(clamp(8, 5, 10)).toEqual(8)
  })
})
