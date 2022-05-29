function findSurroundingIslands(x, y, grid) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
    return;
  }

  if (grid[(x, y)] === '-1' || grid[(x, y)] === '0') {
    grid[x][y] = '-1';
    return;
  } else {
    if (grid[x][y] === '1') {
      //find surrounding land
      grid[x][y] = '-1';
      findSurroundingIslands(x - 1, y, grid);
      findSurroundingIslands(x + 1, y, grid);
      findSurroundingIslands(x, y - 1, grid);
      findSurroundingIslands(x, y + 1, grid);
    }
  }
}

var numIslands = function (grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        findSurroundingIslands(i, j, grid); //
        islandCount = islandCount + 1;
        grid[i][j] = '-1';
      }
    }
  }
  return islandCount;
};

let inputGrid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(inputGrid));
