
function solve(input, part) {
  if (part === 1) {
    return checksum(input);
  } else {
    return getFabricBoxIds(input);
  }
}

const checksum = boxIds => {
  let dup = 0;
  let trip = 0;
  let dup_total = 0;
  let trip_total = 0;

  boxIds.forEach(id => {
    id = id.split("");

    let sorted_arr = id.slice().sort();
    let count = 1;

    sorted_arr.forEach((char, i) => {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        count++;
        if (count === 3) {
          trip++;
          dup--;
        } else if (count === 2) {
          dup++;
        }
      } else {
        count = 1;
      }
    });

    if (trip > 0) {
      trip_total++;
    }

    if (dup > 0) {
      dup_total++;
    }
    trip = 0;
    dup = 0;
  });

  return dup_total * trip_total;
};

const getFabricBoxIds = boxIds => {
  let fabricBoxId;

  boxIds.forEach(id1 => {
    id1 = id1.split('');

    boxIds.forEach(id2 => {
      id2 = id2.split('');
      let diff = id1.filter((char, i) => {
        return id2[i] !== char;
      })
      if (diff.length === 1) {
        fabricBoxId = id1.filter((char, index) => {
          return id2[index] === char;
        })
      }
    })
  })

  return fabricBoxId.join('');
};

const expected = part => (part === 1 ? 5478 : 'qyzphxoiseldjrntfygvdmanu');

module.exports = {
  getFabricBoxIds,
  solve,
  expected
};