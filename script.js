let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;
let gameOver = false;
let board;
let rows = 6;
let columns = 7;
var currColumns;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5];

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row.push(" ");

      let tile = document.createElement("div");
      tile.id(r.toString() + "-" + c.toString());
      tile.classList.add("tile");
      tile.addEventListener("click", setPiece);
      document.querySelector(".board").appendChild(tile);
    }
    board.push(row);
  }
}

function setPiece() {
  if (gameOver) {
    return;
  }

  let coordinates = this.id.split("-");
  let r = parseInt(coordinates[0]);
  let c = parseInt(coordinates[1]);

  r = currColumns[c];
  if (r < 0) {
    return;
  }

  board[r][c] = currPlayer;
  let tile = document.querySelector(r.toString() + "-" + c.toString());

  if (currPlayer == playerRed) {
    tile.classList.add("red-piece");
    currPlayer = playerYellow;
  } else {
    tile.classList.add("yellow-piece");
    currPlayer = playerRed;
  }

  r -= 1;
  currColumns[c] = r;
}
