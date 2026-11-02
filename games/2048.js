// ================================
// 2048 GAME LOGIC
// ================================

const boardElement = document.getElementById("game-board");
const scoreElement = document.getElementById("score");
const bestScoreElement = document.getElementById("best-score");
const messageElement = document.getElementById("game-message");

const newGameButton = document.getElementById("new-game");
const restartButton = document.getElementById("restart-game");

const SIZE = 4;

let board = [];
let score = 0;
let bestScore = Number(localStorage.getItem("puzzleverse-2048-best")) || 0;
let gameOver = false;
let won = false;

// Initialize empty board
function createBoard() {
    board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

// Add a random 2 or 4 tile
function addRandomTile() {
    const emptyCells = [];

    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (board[row][col] === 0) {
                emptyCells.push({ row, col });
            }
        }
    }

    if (emptyCells.length === 0) return;

    const randomCell = emptyCells[
        Math.floor(Math.random() * emptyCells.length)
    ];

    board[randomCell.row][randomCell.col] =
        Math.random() < 0.9 ? 2 : 4;
}

// Display board
function renderBoard() {
    boardElement.innerHTML = "";

    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            const value = board[row][col];

            const tile = document.createElement("div");
            tile.className = `tile tile-${value}`;

            if (value !== 0) {
                tile.textContent = value;
            }

            boardElement.appendChild(tile);
        }
    }

    scoreElement.textContent = score;
    bestScoreElement.textContent = bestScore;
}

// Update score
function updateScore(points) {
    score += points;

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("puzzleverse-2048-best", bestScore);
    }
}

// Merge one row towards the left
function mergeRow(row) {
    let filtered = row.filter(value => value !== 0);
    let newRow = [];
    let points = 0;

    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i] === filtered[i + 1]) {
            const mergedValue = filtered[i] * 2;

            newRow.push(mergedValue);
            points += mergedValue;

            i++;
        } else {
            newRow.push(filtered[i]);
        }
    }

    while (newRow.length < SIZE) {
        newRow.push(0);
    }

    updateScore(points);

    return newRow;
}

// Rotate board clockwise
function rotateBoard() {
    const rotated = Array.from(
        { length: SIZE },
        () => Array(SIZE).fill(0)
    );

    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            rotated[col][SIZE - 1 - row] = board[row][col];
        }
    }

    board = rotated;
}

// Move all rows left
function moveLeft() {
    board = board.map(row => mergeRow(row));
}

// Handle movement
function move(direction) {
    if (gameOver) return;

    const previousBoard = JSON.stringify(board);

    if (direction === "left") {
        moveLeft();
    } else if (direction === "right") {
        rotateBoard();
        rotateBoard();
        moveLeft();
        rotateBoard();
        rotateBoard();
    } else if (direction === "up") {
        rotateBoard();
        rotateBoard();
        rotateBoard();
        moveLeft();
        rotateBoard();
    } else if (direction === "down") {
        rotateBoard();
        moveLeft();
        rotateBoard();
        rotateBoard();
        rotateBoard();
    }

    // Check whether the board actually changed
    if (previousBoard === JSON.stringify(board)) {
        return;
    }

    addRandomTile();

    checkWin();
    renderBoard();

    if (!won && checkGameOver()) {
        gameOver = true;
        messageElement.textContent = "Game Over! No more moves available.";
    }
}

// Check win condition
function checkWin() {
    if (!won) {
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                if (board[row][col] === 2048) {
                    won = true;
                    messageElement.textContent =
                        "Congratulations! You reached 2048!";
                    return;
                }
            }
        }
    }
}

// Check if no moves are available
function checkGameOver() {
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (board[row][col] === 0) return false;

            if (
                col < SIZE - 1 &&
                board[row][col] === board[row][col + 1]
            ) return false;

            if (
                row < SIZE - 1 &&
                board[row][col] === board[row + 1][col]
            ) return false;
        }
    }

    return true;
}

// Start a new game
function startGame() {
    createBoard();

    score = 0;
    gameOver = false;
    won = false;

    messageElement.textContent =
        "Use your arrow keys to move the tiles.";

    addRandomTile();
    addRandomTile();

    renderBoard();
}

// Keyboard controls
document.addEventListener("keydown", function(event) {
    const directions = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down"
    };

    if (directions[event.key]) {
        event.preventDefault();
        move(directions[event.key]);
    }
});

// New Game button
newGameButton.addEventListener("click", startGame);

// Restart button
restartButton.addEventListener("click", startGame);

// Initial setup
bestScoreElement.textContent = bestScore;
startGame();
