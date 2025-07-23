function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

    for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const markCell = (row, column, player) => {
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
    if (!availableCells.length) return;
    const chosenCell = board[row][column];
    chosenCell.changeCell(player);
    }


  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  return { getBoard, markCell, printBoard };
}

function Cell() {
    let value = 0;

    const changeCell = (player) => {
        value = player;
    }

    const getValue = () => value;

    return { changeCell, getValue };
}

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard();

    const players = [{
        name: playerOneName,
        mark: 1
    },
    {
        name: playerTwoName,
        mark: 2
    }]

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
            activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn!`);
    };

    const playRound = (row, column) => {
        console.log(`${getActivePlayer().name} placed their mark!`)
        board.markCell(row, column, getActivePlayer().mark);
        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();

    return { playRound, getActivePlayer };

    }

    const game = GameController();
