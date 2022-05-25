let arr = [1, 2, 2, 1, 1, 3, 3];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let duplicateArr = [];
  let valueSet = new Set();
  for (key in obj) {
    duplicateArr.push(obj[key]);
    valueSet.add(obj[key]);
  }

  return duplicateArr.length === valueSet.size;
};

console.log(uniqueOccurrences(arr));
