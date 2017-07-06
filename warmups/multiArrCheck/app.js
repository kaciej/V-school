var multiArr = [
  [
    1, 2, 3
  ],
  [
    4, 5, 6
  ],
  [7, 8, 9]
];


let arrDataType = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {
      if (typeof arr[0][0] !== typeof arr[i][x]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = arrDataType;
