
function solve(input, part) {
  const spreadsheet = input.map(s => Number(s))

  if (part === 1) {
    return sum(spreadsheet)
  } else {
    return findRepeatFrequency(spreadsheet)
  };
}

const sum = (spreadsheet) => spreadsheet.reduce((a, b) => {
  return a + b
}, 0);

const findRepeatFrequency = (spreadsheet) => {
  const previousFrequencies = [];
  let repeatFrequency;
  let sum = 0

  while (repeatFrequency === undefined) {
    spreadsheet.forEach((num) => {
      sum = sum + num
      if (previousFrequencies.includes(sum)) {
        if (repeatFrequency === undefined) {
          repeatFrequency = sum
        }
      } else {
        previousFrequencies.push(sum);
      }
    });
  }
  return repeatFrequency;
}

const expected = part => part === 1 ? 561 : 563;

module.exports = {
  solve,
  expected,
  sum
};