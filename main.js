const Players = (function () {
  let playerOne = {
    name: "Player One",
    isWinner: false,
    mark: "X",
  };

  let playerTwo = {
    name: "Player Two",
    isWinner: false,
    mark: "O",
  };

  let currentPlayer;

  const switchCurrentPlayer = function () {
    if (currentPlayer === playerOne) {
      return (currentPlayer = playerTwo);
    }
    if (currentPlayer === playerTwo) {
      return (currentPlayer = playerOne);
    }
  };

  const getCurrentPlayer = function () {
    return currentPlayer;
  };

  const getPlayerOne = function () {
    return playerOne;
  };

  const getPlayerTwo = function () {
    return playerTwo;
  };

  const changeWinState = function (player) {
    if (player === playerOne) {
      return (playerOne.isWinner = true);
    } else if (player === playerTwo) {
      return (playerTwo.isWinner = true);
    }
  };

  const getCurrentMark = function () {
    if (currentPlayer === playerOne) {
      return playerOne.mark;
    } else if (currentPlayer === playerTwo) {
      return playerTwo.mark;
    }
  };

  const setCurrentPlayer = function (player) {
    return (currentPlayer = player);
  };
  return {
    switchCurrentPlayer,
    getCurrentPlayer,
    getPlayerOne,
    getPlayerTwo,
    changeWinState,
    getCurrentMark,
    setCurrentPlayer,
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
    let mark = Players.getCurrentPlayer().mark;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (row == i && column == j) {
          board[i][j] = mark;
          console.log(board);
        }
      }
    }
  };

  const checkBoard = function () {
    for (let i = 0; i < board.length; i++) {
      let playerOne = Players.getPlayerOne();
      let playerTwo = Players.getPlayerTwo();
      for (let j = 0; j < 3; j++) {
        if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][0] == "O" &&
          board[0][1] == "O" &&
          board[0][2] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[1][0] == "X" &&
          board[1][1] == "X" &&
          board[1][2] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[1][0] == "O" &&
          board[1][1] == "O" &&
          board[1][2] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[2][0] == "X" &&
          board[2][1] == "X" &&
          board[2][2] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[2][0] == "O" &&
          board[2][1] == "O" &&
          board[2][2] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][0] == "X" &&
          board[1][0] == "X" &&
          board[2][0] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][0] == "O" &&
          board[1][0] == "O" &&
          board[2][0] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][1] == "X" &&
          board[1][1] == "X" &&
          board[2][1] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][1] == "O" &&
          board[1][1] == "O" &&
          board[2][1] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][2] == "X" &&
          board[1][2] == "X" &&
          board[2][2] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][2] == "O" &&
          board[1][2] == "O" &&
          board[2][2] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][0] == "X" &&
          board[1][1] == "X" &&
          board[2][2] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][0] == "O" &&
          board[1][1] == "O" &&
          board[2][2] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][2] == "X" &&
          board[1][1] == "X" &&
          board[2][0] == "X"
        ) {
          Players.changeWinState(playerOne);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else if (
          board[0][2] == "O" &&
          board[1][1] == "O" &&
          board[2][0] == "O"
        ) {
          Players.changeWinState(playerTwo);
          DialogController.showWinnerDialog();
          GameController.endGame();
          return;
        } else {
          console.log("still playing");
          return;
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
    checkBoard,
  };
})();

const GameController = (function() {
  let playerDisplay = document.getElementById("player-display");
  let cells = document.querySelectorAll(".cell");
  let cellArray = Array.from(cells);
  let board = Gameboard.getBoard();
  let playerOne = Players.getPlayerOne();
  let playerTwo = Players.getPlayerTwo();

  function playGame() {
    playerOne.isWinner = false;
    playerTwo.isWinner = false;
    Players.setCurrentPlayer(Players.getPlayerOne());
    playerDisplay.textContent = `${Players.getCurrentPlayer().name.toLowerCase()}'s turn!`;
    cellArray.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        let column = cell.dataset.column;
        let row = cell.dataset.row;
        if (
          !cell.classList.contains("taken") &&
          !cell.classList.contains("locked")
        ) {
          cell.disabled = false;
          Gameboard.changeCell(row, column);
          cell.classList.add("taken");
          cell.textContent = `${Players.getCurrentMark()}`;
          Players.switchCurrentPlayer();
          console.log(board);
          playerDisplay.textContent = `${Players.getCurrentPlayer().name.toLowerCase()}'s turn!`;
          Gameboard.checkBoard();
        }})})};

  function endGame() {
    cellArray.forEach((cell) => {
      cell.classList.add("locked");
    });
    Gameboard.resetBoard();
    playerOne.name = "player one";
    playerTwo.name = "player two";
    playerOne.isWinner = false;
    playerTwo.isWinner = false;
  }

  function resetDOMCells() {
    cellArray.forEach((cell) => {
      cell.classList.remove("locked");
      if (cell.classList.contains("taken")) {
        cell.classList.remove("taken");
      }})
    }
  

  return {endGame, playGame, resetDOMCells }
})();

const DialogController = (function() {
  let letsPlayDialog = document.getElementById("lets-play-dialog");
  let letsPlayForm = document.getElementById("lets-play-form");
  let p1NameInput = document.getElementById("p1-name-input");
  let p2NameInput = document.getElementById("p2-name-input");
  let winnerDialog = document.getElementById("winner-dialog");
  let winnerDialogText = document.getElementById("winner-dialog-text");
  let winnerDialogForm = document.getElementById("winner-dialog-form");
  
  const showLetsPlayDialog = function() {
    letsPlayDialog.showModal();
    letsPlayForm.addEventListener("submit", (e) => {
      e.preventDefault();
      Players.getPlayerOne().name = p1NameInput.value;
      Players.getPlayerTwo().name = p2NameInput.value;
      letsPlayDialog.close();
      GameController.playGame();
    }
    )
  }

  const showWinnerDialog = function() {
    winnerDialogText.textContent = `${Players.getCurrentPlayer().name.toLowerCase()} wins!`;
    winnerDialog.showModal();
    winnerDialogForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    winnerDialog.close();
    showLetsPlayDialog();
    })
  }
  
  return { showLetsPlayDialog, showWinnerDialog }
})();

DialogController.showLetsPlayDialog();