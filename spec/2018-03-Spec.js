let {
  overlap
} = require("../2018/03/solve")

describe("2018 day 3", function () {
  it("solves the part 3 test case", function () {
    const input = [
      '#1 @ 1,3: 2x2',
      '#2 @ 1,3: 2x3',
    ]
    let solution = overlap(input)
    expect(solution).toEqual(4)
  })
});

// // describe("Utils", function() {
// //     it ("can do a basic breadth first search", function() {