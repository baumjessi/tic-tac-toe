var board = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
];

console.log(board);

function createPlayers(name, mark) {
  return {
    name: name,
    mark: mark,
  };
}

function clearBoard() {
  board =  [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
];
}

let playerOne = createPlayers("playerOne", "X");
let playerTwo = createPlayers("playerTwo", "O");
let winningPlayer;
let currentPlayer = playerOne;

function playRound() {
  let currentPlayer = playerOne;
  console.log(currentPlayer);

  let playerOneChoice = window.prompt("player one enter coordinates");
  let playerOneChoiceUpCase = playerOneChoice.toUpperCase();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "X" || board[i][j] == "O") {
      }
      if (board[i][j] === playerOneChoiceUpCase) {
        board[i][j] = "X";
        console.log(`player one chose ${playerOneChoice}!`);
      }
    }
  }
  currentPlayer = playerTwo;
  let playerTwoChoice = window.prompt("player two enter coordinates");
  let playerTwoChoiceUpCase = playerTwoChoice.toUpperCase();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j].includes(playerTwoChoiceUpCase)) {
        board[i][j] = "O";
        console.log(`player two chose ${playerTwoChoice}!`);
      }
    }
  }
  console.log(board);
}

function checkBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        declareWinner();
        return (winningPlayer = playerOne);
      } else if (
        board[0][0] == "O" &&
        board[0][1] == "O" &&
        board[0][2] == "O"
      ) {
        declareWinner();
        return (winningPlayer = playerTwo);
      } else if (
        board[1][0] == "X" &&
        board[1][1] == "X" &&
        board[1][2] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[1][0] == "O" &&
        board[1][1] == "O" &&
        board[1][2] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else if (
        board[2][0] == "X" &&
        board[2][1] == "X" &&
        board[2][2] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[2][0] == "O" &&
        board[2][1] == "O" &&
        board[2][2] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else if (
        board[0][0] == "X" &&
        board[1][0] == "X" &&
        board[2][0] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[0][0] == "O" &&
        board[1][0] == "O" &&
        board[2][0] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else if (
        board[0][1] == "X" &&
        board[1][1] == "X" &&
        board[2][1] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[0][1] == "O" &&
        board[1][1] == "O" &&
        board[2][1] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else if (
        board[0][2] == "X" &&
        board[1][2] == "X" &&
        board[2][2] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[0][2] == "O" &&
        board[1][2] == "O" &&
        board[2][2] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else if (
        board[0][0] == "X" &&
        board[1][1] == "X" &&
        board[2][2] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[0][0] == "O" &&
        board[1][1] == "O" &&
        board[2][2] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else if (
        board[0][2] == "X" &&
        board[1][1] == "X" &&
        board[2][0] == "X"
      ) {
        return (winningPlayer = playerOne);
      } else if (
        board[0][2] == "O" &&
        board[1][1] == "O" &&
        board[2][0] == "O"
      ) {
        return (winningPlayer = playerTwo);
      } else {
        playRound();
      }
    }
  }
}

function declareWinner() {
  if (winningPlayer === playerOne) {
    console.log("player one wins!");
  } else if (winningPlayer === playerTwo) {
    console.log("player two wins!");
  }
}

function playGame() {
  checkBoard();
  declareWinner();
}

playGame();

let playerDisplay = document.getElementById("player-display");

let cells = document.querySelectorAll(".cell");
let cellArray = Array.from(cells);
console.log(currentPlayer);

cellArray.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    let column = cell.dataset.column;
    let row = cell.dataset.row;
    if (!cell.classList.contains("taken")) {
      if (currentPlayer === playerOne) {
        cell.disabled = false;
        cell.textContent = "X";
        cell.classList.add("taken");
        console.log(cell.dataset.row);
        console.log(cell.dataset.column);
        changeBoardFromDOM(row, column);
        currentPlayer = playerTwo;
        playerDisplay.textContent = "player two's turn!";
      } else if (currentPlayer === playerTwo) {
        cell.disabled = false;
        cell.textContent = "O";
        cell.classList.add("taken");
        console.log(row);
        console.log(column);
        changeBoardFromDOM(row, column);
        currentPlayer = playerOne;
        playerDisplay.textContent = "player one's turn!";
      }
    }
   else {
    cell.disabled = true;
   }
  });
});

function changeBoardFromDOM(row, column) {
    for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (row == i && column == j) {
        if (currentPlayer === playerOne) {
          board[i][j] = "X";
        }
        if (currentPlayer === playerTwo) {
          board[i][j] = "O";
        }
      }
    }}}; 