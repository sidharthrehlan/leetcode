function TickTacToeGame(matrix, root) {
  // this.matrix = matrix;
  let buttons = '';
  let gameContainer = document.querySelector(root);
  let player;
  let counter = 0;
  let player0Track = new Array(8).fill(0);
  let playerXTrack = new Array(8).fill(0);
  let gameFinished = false;

  addEvents = function () {
    gameContainer.addEventListener('click', (e) => {
      if (gameFinished) return;
      let target = e.target;
      if (target.nodeName === 'BUTTON') {
        let id = target.id;
        target.disabled = true;
        counter++;
        player = counter % 2 ? '0' : 'X';
        target.innerHTML = player;
        const position = getButtonCoordinates(id);
        updatePlayerTrack(player, position, counter);
      }
    });
  };

  isWin = function (value) {
    return value === 3;
  };

  updateResult = function (result) {
    let resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `Result:${result}`;
    gameFinished = true;
  };

  updatePlayerTrack = function (player, position, counter) {
    let playerTrack = player === 'X' ? playerXTrack : player0Track;
    let x = parseInt(position[0]);
    let y = parseInt(position[1]);

    //update column
    playerTrack[x]++;
    if (isWin(playerTrack[x])) {
      updateResult(player);
      return;
    }

    //update row
    playerTrack[y + 3]++;
    if (isWin(playerTrack[y + 3])) {
      updateResult(player);
      return;
    }

    //update primary diagonal
    if (x === y) {
      playerTrack[6]++;
      if (isWin(playerTrack[6])) {
        updateResult(player);
        return;
      }
    }
    if (x === 2 - y) {
      playerTrack[7]++;
      if (isWin(playerTrack[7])) {
        updateResult(player);
        return;
      }
    }
    if (counter === 9) {
      updateResult('Draw');
    }
  };

  getButtonCoordinates = function (id) {
    return id.split('_');
  };

  createLayout = function () {
    for (let i = 0; i < matrix; i++) {
      for (let j = 0; j < matrix; j++) {
        buttons = buttons + `<button id="${i}_${j}"></button>`;
      }
    }

    const html = buttons + '<div id="result">Result:</div>';
    gameContainer.innerHTML = html;
  };

  createLayout();
  addEvents();
}

let tickTac = new TickTacToeGame(3, '#gameContainer');
