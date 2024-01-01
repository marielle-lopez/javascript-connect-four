let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;
let gameOver = false;
let board;
let rows = 6;
let columns = 7;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [];

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row.push(" ");

      let tile = document.createElement("div");
      tile.classList.add(r.toString() + "-" + c.toString());
      tile.classList.add("tile");
      document.querySelector("board").appendChild(tile);
    }
  }
}
