/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let countPath = 0;

  const findPath = (x, y) => {
    if (x === 1 || y === 1) {
      return 1;
    }

    return findPath(x - 1, y) + findPath(x, y - 1);
  };

  countPath = findPath(m, n);

  return countPath;
};

console.log(uniquePaths(3, 3));
