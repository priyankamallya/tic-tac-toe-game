const board = document.querySelector(".board");
const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset-button");
const players = ["X", "O"];

let currentPlayer = players[0];

message.textContent = `X's turn`;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }

    squares[i].textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
      message.textContent = `Game over. ${currentPlayer} wins the game`;
      return;
    }

    if (checkTieResult()) {
      message.textContent = `Game over. It is a tie`;
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

    if (currentPlayer === players[0]) {
      message.textContent = `X's Turn`;
    } else {
      message.textContent = `O's turn`;
    }
  });
}

function checkWinner(currentPlayer) {
  for (i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTieResult() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  message.textContent = `X's turn`;
  currentPlayer = players[0];
}

resetButton.addEventListener("click", () => {
  restartGame();
});
