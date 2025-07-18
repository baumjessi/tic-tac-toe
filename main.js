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

function checkBoard() {
    for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
        if (board[0][0] == "X" && 
            board[0][1] == "X" &&
            board[0][2] == "X") {
                console.log("player one wins!")
            }
        else if (board[0][0] == "O" && 
            board[0][1] == "O" &&
            board[0][2] == "O") {
                console.log("player two wins!")
            }
        else if (board[1][0] == "X" && 
            board[1][1] == "X" &&
            board[1][2] == "X") {
                console.log("player one wins!")
            }
        else if (board[1][0] == "O" && 
            board[1][1] == "O" &&
            board[1][2] == "O") {
                console.log("player two wins!")
            }
        else if (board[2][0] == "X" && 
            board[2][1] == "X" &&
            board[2][2] == "X") {
                console.log("player one wins!")
            }
        else if (board[2][0] == "O" && 
            board[2][1] == "O" &&
            board[2][2] == "O") {
                console.log("player two wins!")
            }
        else if (board[0][0] == "X" && 
            board[1][0] == "X" &&
            board[2][0] == "X") {
                console.log("player one wins!")
            }
        else if (board[0][0] == "O" && 
            board[1][0] == "O" &&
            board[2][0] == "O") {
                console.log("player two wins!")
            }
        else if (board[0][1] == "X" && 
            board[1][1] == "X" &&
            board[2][1] == "X") {
                console.log("player one wins!")
            }
        else if (board[0][1] == "O" && 
            board[1][1] == "O" &&
            board[2][1] == "O") {
                console.log("player two wins!")
            }
        else if (board[0][2] == "X" && 
            board[1][2] == "X" &&
            board[2][2] == "X") {
                console.log("player one wins!")
            }
        else if (board[0][2] == "O" && 
            board[1][2] == "O" &&
            board[2][2] == "O") {
                console.log("player two wins!")
            }
        else if (board[0][0] == "X" && 
            board[1][1] == "X" &&
            board[2][2] == "X") {
                console.log("player one wins!")
            }
        else if (board[0][0] == "O" && 
            board[1][1] == "O" &&
            board[2][2] == "O") {
                console.log("player two wins!")
            }
        else if (board[0][2] == "X" && 
            board[1][1] == "X" &&
            board[2][0] == "X") {
                console.log("player one wins!")
            }
        else if (board[0][2] == "O" && 
            board[1][1] == "O" &&
            board[2][0] == "O") {
                console.log("player two wins!")
            }
        else {
            "lets play again!"
        }
}
}
};

playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
checkBoard();