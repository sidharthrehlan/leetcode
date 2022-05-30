var tictactoe = function (moves) {
  let winArrayA = new Array(8).fill(0);
  let winArrayB = new Array(8).fill(0);

  // [rowwin, columnwin, primary diagonal, secondary diagonal]

  let winArray;

  for (let i = 0; i < moves.length; i++) {
    let x = moves[i][0];
    let y = moves[i][1];

    if (i % 2 === 0) {
      player = 'A';
      winArray = winArrayA;
    } else {
      player = 'B';
      winArray = winArrayB;
    }

    // add row values
    winArray[x] = winArray[x] + 1;
    if (isWin(winArray[x])) {
      return player;
    }
    //add column values
    winArray[3 + y] = winArray[3 + y] + 1;
    if (isWin(winArray[3 + y])) {
      return player;
    }
    //add primary diagonal values
    if (x === y) {
      winArray[6] = winArray[6] + 1;
      if (isWin(winArray[6])) {
        return player;
      }
    }
    //add secondary diagonal values
    if (y === 2 - x) {
      winArray[7] = winArray[7] + 1;
      if (isWin(winArray[7])) {
        return player;
      }
    }
  }
  if (moves.length === 9) {
    return 'Draw';
  }
  if (moves.length < 9) {
    return 'Pending';
  }
};

function isWin(count) {
  if (count === 3) {
    return true;
  }
}

let moves = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];
