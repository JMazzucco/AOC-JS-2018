let {
  overlap,
  nonOverlapping
} = require("../2018/03/solve")

describe("2018 day 3", function () {
  it("solves the part 1 test case", function () {
    const input = [
      '#1 @ 1,3: 2x2',
      '#2 @ 1,3: 2x3',
      '#3 @ 10,10: 2x3',
    ]
    let solution = overlap(input)
    expect(solution).toEqual(4)
  })

  it("solves the part 2 test case", function () {
    const input = [
      '#1 @ 1,3: 2x2',
      '#2 @ 1,3: 2x3',
      '#3 @ 10,10: 2x3',
    ]
    let solution = nonOverlapping(input)
    expect(solution).toEqual('3')
  })
});