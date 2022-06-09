/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let countPath = 0;

  const findPath = (x, y) => {
    if (x > m - 1) {
      return;
    }
    if (y > n - 1) {
      return;
    }
    if (x === m - 1 && y === n - 1) {
      countPath++;
      return;
    }

    findPath(x + 1, y);
    findPath(x, y + 1);

    return countPath;
  };

  findPath(0, 0);
  return countPath;
};

console.log(uniquePaths(1, 1));
