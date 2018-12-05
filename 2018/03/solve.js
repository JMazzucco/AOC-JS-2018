

function solve(input, part) {
  if (part === 1) {
    return overlap(input);
    // } else {
    //   return getFabricBoxIds(input);
  }
}

const coverage = (left, right, top, bottom) => {
  area = []
  xArray = [...Array(1 + right - left).keys()].map(v => left + v)
  yArray = [...Array(1 + bottom - top).keys()].map(v => top + v)

  xArray.forEach(x => {
    yArray.forEach(y => {
      area.push(`${x}x${y}`)
    })
  })
  return area
}

const intersectRecs = (r1, r2) => {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

const overlap = input => {
  overlappingCoordinates = []

  const claims = input.map(s => {
    arr = s.split(' ')
    let id = arr[0].slice(1)
    let left = parseInt(arr[2].split(',')[0])
    let top = parseInt(arr[2].split(',')[1].slice(0, -1))
    let right = left + parseInt(arr[3].split('x')[0]) - 1
    let bottom = top + parseInt(arr[3].split('x')[1]) - 1

    return { id, left, top, right, bottom }
  })

  claims.forEach((rec1, index1) => {
    claims.forEach((rec2, index2) => {
      if (rec1.id === rec2.id || index1 > index2) { return }
      if (intersectRecs(rec1, rec2)) {
        arr1 = coverage(rec1.left, rec1.right, rec1.top, rec1.bottom)
        arr2 = coverage(rec2.left, rec2.right, rec2.top, rec2.bottom)
        let diff = arr1.filter((coordinate, i) => { return arr2.includes(coordinate) })
        overlappingCoordinates = overlappingCoordinates.concat(diff)
      }
    })
  })
  return [...new Set(overlappingCoordinates)].length;
};


const expected = part => (part === 1 ? 103806 : 'qyzphxoiseldjrntfygvdmanu');

module.exports = {
  overlap,
  solve,
  expected
};