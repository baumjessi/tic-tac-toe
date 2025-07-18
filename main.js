var board = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
   ]

console.log(board);

function createPlayers(name, mark) {
    return {
        name: name,
        mark: mark
    }
};

let playerOne = createPlayers("playerOne", "x");
let playerTwo = createPlayers("playerTwo", "x");

function playRound() {
    let currentPlayer = playerOne;
    console.log(currentPlayer);
    let playerOneChoice = window.prompt("player one enter coordinates");
    let playerOneChoiceUpCase = playerOneChoice.toUpperCase();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === playerOneChoiceUpCase) {
                board[i][j] = "X";
                console.log (`player one chose ${playerOneChoice}!`)
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
                console.log (`player two chose ${playerTwoChoice}!`)
            }
        }
    }
    console.log(board);
}

playRound();

