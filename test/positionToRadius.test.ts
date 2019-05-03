import { positionToRadius } from "../src/util/positionToRadius"

describe("positionToRadius", () => {
  it("default 15° middle", () => {
    expect(positionToRadius(15, 50, 50)).toMatchSnapshot()
  })

  it("default 15°", () => {
    expect(positionToRadius(15, 50, 50, 50)).toMatchSnapshot()
  })

  it("default 30°", () => {
    expect(positionToRadius(30, 50, 50, 50)).toMatchSnapshot()
  })

  it("default 30°, translated", () => {
    expect(positionToRadius(30, 50, 40, 60)).toMatchSnapshot()
  })

  it("default 30°, translated, different radius", () => {
    expect(positionToRadius(30, 20, 40, 60)).toMatchSnapshot()
  })

  it("different base, 30°", () => {
    expect(positionToRadius(30, 20, 40, 60, 180)).toMatchSnapshot()
  })
})
