const Players = (function () {
  let playerOne = {
    name: "Player One",
    isWinner: false,
  };

  let playerTwo = {
    name: "Player Two",
    isWinner: false,
  };

  let currentPlayer = playerOne;

  const switchCurrentPlayer = function() {
    if (currentPlayer === playerOne) {
      return currentPlayer = playerTwo;
    }
    if (currentPlayer === playerTwo) {
      return currentPlayer = playerOne;
    }
  };

  const getCurrentPlayer = function() {
    return currentPlayer;
  }

  const getPlayerOne = function() {
    return playerOne;
  }

  const getPlayerTwo = function() {
    return playerTwo;
  }

  return {
    switchCurrentPlayer,
    getCurrentPlayer,
    getPlayerOne,
    getPlayerTwo,
  };
})();

const Gameboard = (function () {
  let board = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
  ];

  const getBoard = function () {
    return board;
  };

  const changeCell = function (row, column) {
    let currentPlayer = Players.getCurrentPlayer();
    let playerOne = Players.getPlayerOne();
    let playerTwo = Players.getPlayerTwo();
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (row == i && column == j) {
          if (currentPlayer === playerOne) {
            console.log(board);
            Players.switchCurrentPlayer();
            return board[i][j] = "X";
          }
          if (currentPlayer === playerTwo) {
            console.log(board);
            Players.switchCurrentPlayer();
            return board[i][j] = "O";
          }
        }
      }
    }
  };

  const resetBoard = function () {
    board = [
      ["A1", "A2", "A3"],
      ["B1", "B2", "B3"],
      ["C1", "C2", "C3"],
    ];
  };

  return {
    getBoard,
    changeCell,
    resetBoard,
  };
})();

console.log(Gameboard.getBoard());

function playGame() {

}

//everything below is not module pattern

// function resetGame() {
//   cellArray.forEach((cell) => {
//     cell.textContent = "";
//     cell.disabled = false;
//     cell.classList.remove("taken");
//   });
//   board = [
//     ["A1", "A2", "A3"],
//     ["B1", "B2", "B3"],
//     ["C1", "C2", "C3"],
//   ];

//   winningPlayer = null;
//   gameOver = false;
//   playerDisplay.textContent = "let's play!";
// }

function checkBoard(row, column) {
  let board = Gameboard.getBoard;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][0] == "O" &&
        board[0][1] == "O" &&
        board[0][2] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[1][0] == "X" &&
        board[1][1] == "X" &&
        board[1][2] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[1][0] == "O" &&
        board[1][1] == "O" &&
        board[1][2] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[2][0] == "X" &&
        board[2][1] == "X" &&
        board[2][2] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[2][0] == "O" &&
        board[2][1] == "O" &&
        board[2][2] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][0] == "X" &&
        board[1][0] == "X" &&
        board[2][0] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][0] == "O" &&
        board[1][0] == "O" &&
        board[2][0] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][1] == "X" &&
        board[1][1] == "X" &&
        board[2][1] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][1] == "O" &&
        board[1][1] == "O" &&
        board[2][1] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][2] == "X" &&
        board[1][2] == "X" &&
        board[2][2] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][2] == "O" &&
        board[1][2] == "O" &&
        board[2][2] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][0] == "X" &&
        board[1][1] == "X" &&
        board[2][2] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][0] == "O" &&
        board[1][1] == "O" &&
        board[2][2] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][2] == "X" &&
        board[1][1] == "X" &&
        board[2][0] == "X"
      ) {
        console.log("player one wins!");
        winningPlayer = playerOne;
        declareWinner(winningPlayer);
        return;
      } else if (
        board[0][2] == "O" &&
        board[1][1] == "O" &&
        board[2][0] == "O"
      ) {
        console.log("player two wins!");
        winningPlayer = playerTwo;
        declareWinner(winningPlayer);
        return;
      } else {
        console.log("still playing");
        playRound(row, column);
      }
    }
  }
}

// let playerDisplay = document.getElementById("player-display");
// let cells = document.querySelectorAll(".cell");
// let cellArray = Array.from(cells);
// // console.log(currentPlayer);

// function playGame() {
//   cellArray.forEach((cell) => {
//     cell.addEventListener("click", (e) => {
//       let column = cell.dataset.column;
//       let row = cell.dataset.row;
//       if (!cell.classList.contains("taken")) {
//         if (currentPlayer === playerOne) {
//           cell.disabled = false;
//           cell.textContent = "X";
//           cell.classList.add("taken");
//           playRound(row, column);
//           checkBoard();
//           if (gameOver === false) {
//             currentPlayer = playerTwo;
//             playerDisplay.textContent = "player two's turn!";
//           } else {
//             return;
//           }
//         } else if (currentPlayer === playerTwo) {
//           cell.disabled = false;
//           cell.textContent = "O";
//           cell.classList.add("taken");
//           playRound(row, column);
//           checkBoard();
//           if (gameOver === false) {
//             currentPlayer = playerOne;
//             playerDisplay.textContent = "player one's turn!";
//           } else {
//             return;
//           }
//         }
//       } else {
//         cell.disabled = true;
//       }
//     });
//   });
// }

// function endGame() {
//   cellArray.forEach((cell) => {
//     cell.disabled = true;
//   });
// }

// function declareWinner() {
//   endGame();
//   gameOver = true;
//   if (winningPlayer === playerOne) {
//     console.log("declare winner is working");
//     playerDisplay.textContent = "player one wins!";
//   } else if (winningPlayer === playerTwo) {
//     console.log("declare winnder is working!");
//     playerDisplay.textContent = "player two wins!";
//   }
// }

// playGame();
// resetGame();
