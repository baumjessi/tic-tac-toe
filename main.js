function Gameboard() {
   var board = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
   ]
   console.log(board);
}

Gameboard();

function createPlayers() {
    const playerOne = {
        name: "Player One",
        mark: "X"
    }
    const playerTwo = {
        name: "Player Two",
        mark: "O"
    }
    console.log(playerOne);
    console.log(playerTwo);
};

createPlayers();