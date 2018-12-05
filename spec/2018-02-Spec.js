let {
  getFabricBoxIds
} = require("../2018/02/solve")

describe("2018 day 2", function () {
  it("solves the part 2 test case", function () {
    const input = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'fguij',
      'axcye',
      'wvxyz'
    ]
    let solution = getFabricBoxIds(input)
    expect(solution).toEqual('fgij')
  })
});

// // describe("Utils", function() {
// //     it ("can do a basic breadth first search", function() {