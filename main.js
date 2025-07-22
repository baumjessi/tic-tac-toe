const { cloneElement } = require("react");

function Gameboard () {
    const board = [
        ["A1", "A2", "A3"],
        ["B1", "B2", "B3"],
        ["C1", "C2", "C3"]
    ]

    const getBoard = () => board;

    const markCell = (coordinate, player) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++)  {
                if (board[i][j] === coordinate) {
                    board[i][j].changeCell(player);
                }
                else {
                    return;
                }
            }
            }
        }}