var board = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
   ]

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
    console.log(`player one chose ${playerOneChoice}`);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 3; j++) {
        if (playerOneChoice.toUppercase = board[i][j]) {
            board[i][j] = "X";
        }
        else {
            window.alert("oops! not a choice");
        }
        }
    }
    currentPlayer = playerTwo;
    let playerTwoChoice = window.prompt("player two enter coordinates");
    console.log(`player two chose ${playerTwoChoice}`);
}

playRound();

