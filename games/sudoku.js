
// ==========================================
// PUZZLEVERSE - SUDOKU GAME ENGINE
// ==========================================

const boardElement = document.getElementById("sudoku-board");
const settingsScreen = document.getElementById("sudoku-settings");
const gameScreen = document.getElementById("sudoku-game");
const resultScreen = document.getElementById("sudoku-result");

const difficultySelect = document.getElementById("difficulty");
const mistakeModeSelect = document.getElementById("mistake-mode");

const startButton = document.getElementById("start-sudoku");
const restartButton = document.getElementById("restart-sudoku");
const newGameButton = document.getElementById("new-sudoku");
const checkButton = document.getElementById("check-sudoku");
const hintButton = document.getElementById("hint-sudoku");
const playAgainButton = document.getElementById("play-again");

const timerDisplay = document.getElementById("sudoku-timer");
const mistakeDisplay = document.getElementById("mistake-count");
const messageDisplay = document.getElementById("sudoku-message");

const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");

// Game variables

let solution = [];
let originalPuzzle = [];
let currentBoard = [];

let selectedCell = null;
let mistakes = 0;
let seconds = 0;

let timerInterval = null;
let gameActive = false;

let difficulty = "easy";
let mistakeMode = "unlimited";

const SIZE = 9;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Create a 9x9 empty board

function createEmptyBoard() {
    return Array.from(
        { length: SIZE },
        () => Array(SIZE).fill(0)
    );
}

// Shuffle an array randomly

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

// Clone a Sudoku board

function cloneBoard(board) {
    return board.map(row => [...row]);
}

// ==========================================
// CHECK SUDOKU VALIDITY
// ==========================================

function isValid(board, row, col, number) {

    // Check row and column

    for (let i = 0; i < SIZE; i++) {

        if (board[row][i] === number) {
            return false;
        }

        if (board[i][col] === number) {
            return false;
        }
    }

    // Check 3x3 box

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let r = boxRow; r < boxRow + 3; r++) {

        for (let c = boxCol; c < boxCol + 3; c++) {

            if (board[r][c] === number) {
                return false;
            }
        }
    }

    return true;
}

// ==========================================
// GENERATE COMPLETE SUDOKU SOLUTION
// ==========================================

function fillBoard(board) {

    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            if (board[row][col] === 0) {

                const numbers = shuffleArray(
                    [1, 2, 3, 4, 5, 6, 7, 8, 9]
                );

                for (const number of numbers) {

                    if (isValid(board, row, col, number)) {

                        board[row][col] = number;

                        if (fillBoard(board)) {
                            return true;
                        }

                        board[row][col] = 0;
                    }
                }

                return false;
            }
        }
    }

    return true;
}

// ==========================================
// COUNT POSSIBLE SOLUTIONS
// Stops after finding 2 solutions
// ==========================================

function countSolutions(board) {

    let count = 0;

    function solve() {

        if (count >= 2) {
            return;
        }

        let bestCell = null;
        let bestCandidates = null;

        // Find an empty cell with the fewest candidates

        for (let row = 0; row < SIZE; row++) {

            for (let col = 0; col < SIZE; col++) {

                if (board[row][col] === 0) {

                    const candidates = [];

                    for (let n = 1; n <= 9; n++) {

                        if (isValid(board, row, col, n)) {
                            candidates.push(n);
                        }
                    }

                    if (candidates.length === 0) {
                        return;
                    }

                    if (
                        bestCandidates === null ||
                        candidates.length < bestCandidates.length
                    ) {
                        bestCell = { row, col };
                        bestCandidates = candidates;
                    }
                }
            }
        }

        // No empty cells means one complete solution

        if (bestCell === null) {
            count++;
            return;
        }

        const { row, col } = bestCell;

        for (const number of bestCandidates) {

            board[row][col] = number;

            solve();

            board[row][col] = 0;

            if (count >= 2) {
                return;
            }
        }
    }

    solve();

    return count;
}

// ==========================================
// GENERATE A SUDOKU PUZZLE
// ==========================================

function generatePuzzle() {

    solution = createEmptyBoard();

    // Generate a complete valid board

    fillBoard(solution);

    originalPuzzle = cloneBoard(solution);

    // Select difficulty

    let targetClues;

    if (difficulty === "easy") {
        targetClues = 40;
    }
    else if (difficulty === "medium") {
        targetClues = 34;
    }
    else {
        targetClues = 30;
    }

    // Randomly remove numbers while preserving
    // a unique solution

    const positions = shuffleArray(
        Array.from({ length: 81 }, (_, i) => i)
    );

    let clues = 81;

    for (const position of positions) {

        if (clues <= targetClues) {
            break;
        }

        const row = Math.floor(position / 9);
        const col = position % 9;

        const savedNumber = originalPuzzle[row][col];

        originalPuzzle[row][col] = 0;

        const testBoard = cloneBoard(originalPuzzle);

        if (countSolutions(testBoard) === 1) {
            clues--;
        }
        else {
            originalPuzzle[row][col] = savedNumber;
        }
    }

    currentBoard = cloneBoard(originalPuzzle);
}

// ==========================================
// DISPLAY SUDOKU BOARD
// ==========================================

function displayBoard() {

    boardElement.innerHTML = "";

    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            const cell = document.createElement("button");

            cell.type = "button";
            cell.classList.add("sudoku-cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            const value = currentBoard[row][col];

            if (value !== 0) {
                cell.textContent = value;
            }

            // Original numbers cannot be changed

            if (originalPuzzle[row][col] !== 0) {
                cell.classList.add("fixed");
            }
            else if (value !== 0) {
                cell.classList.add("user-filled");
            }

            cell.addEventListener("click", () => {
                selectCell(row, col);
            });

            boardElement.appendChild(cell);
        }
    }

    highlightCells();
}

// ==========================================
// SELECT AND HIGHLIGHT CELLS
// ==========================================

function selectCell(row, col) {

    if (!gameActive) {
        return;
    }

    if (originalPuzzle[row][col] !== 0) {
        selectedCell = { row, col };
        highlightCells();
        return;
    }

    selectedCell = { row, col };

    highlightCells();
}

function highlightCells() {

    const cells = document.querySelectorAll(".sudoku-cell");

    cells.forEach(cell => {

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);

        cell.classList.remove(
            "selected",
            "related",
            "same-number"
        );

        if (selectedCell === null) {
            return;
        }

        const selectedRow = selectedCell.row;
        const selectedCol = selectedCell.col;

        if (
            row === selectedRow ||
            col === selectedCol ||
            (
                Math.floor(row / 3) === Math.floor(selectedRow / 3) &&
                Math.floor(col / 3) === Math.floor(selectedCol / 3)
            )
        ) {
            cell.classList.add("related");
        }

        if (row === selectedRow && col === selectedCol) {
            cell.classList.add("selected");
        }

        const selectedNumber =
            currentBoard[selectedRow][selectedCol];

        if (
            selectedNumber !== 0 &&
            currentBoard[row][col] === selectedNumber
        ) {
            cell.classList.add("same-number");
        }
    });
}

// ==========================================
// ENTER OR ERASE A NUMBER
// ==========================================

function enterNumber(number) {

    if (!gameActive || selectedCell === null) {
        return;
    }

    const { row, col } = selectedCell;

    // Do not change original numbers

    if (originalPuzzle[row][col] !== 0) {
        return;
    }

    // Erase selected cell

    if (number === 0) {

        currentBoard[row][col] = 0;

        messageDisplay.textContent = "";

        displayBoard();

        return;
    }

    // Check whether entered number is correct

    if (number !== solution[row][col]) {

        mistakes++;

        mistakeDisplay.textContent = mistakes;

        messageDisplay.textContent = "Incorrect number. Try again!";

        if (mistakeMode === "limited" && mistakes >= 3) {
            endGame(false);
        }

        return;
    }

    // Enter correct number

    currentBoard[row][col] = number;

    messageDisplay.textContent = "Correct!";

    displayBoard();

    checkCompletion();
}

// ==========================================
// NUMBER BUTTON EVENTS
// ==========================================

document
    .querySelectorAll("#number-buttons button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const number = Number(button.dataset.number);

            enterNumber(number);
        });
    });

// ==========================================
// CHECK COMPLETION
// ==========================================

function checkCompletion() {

    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            if (currentBoard[row][col] === 0) {
                return;
            }
        }
    }

    // All cells are filled correctly

    endGame(true);
}

// ==========================================
// CHECK BUTTON
// ==========================================

checkButton.addEventListener("click", () => {

    if (!gameActive) {
        return;
    }

    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            if (
                currentBoard[row][col] === 0 ||
                currentBoard[row][col] !== solution[row][col]
            ) {
                messageDisplay.textContent =
                    "The puzzle is not complete yet. Keep going!";

                return;
            }
        }
    }

    endGame(true);
});

// ==========================================
// TIMER
// ==========================================

function startTimer() {

    clearInterval(timerInterval);

    seconds = 0;

    updateTimer();

    timerInterval = setInterval(() => {

        if (!gameActive) {
            return;
        }

        seconds++;

        updateTimer();

    }, 1000);
}

function updateTimer() {

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0");
}

// ==========================================
// START GAME
// ==========================================

function startGame() {

    difficulty = difficultySelect.value;
    mistakeMode = mistakeModeSelect.value;

    mistakes = 0;
    selectedCell = null;

    mistakeDisplay.textContent = "0";
    messageDisplay.textContent = "";

    generatePuzzle();

    settingsScreen.hidden = true;
    resultScreen.hidden = true;
    gameScreen.hidden = false;

    gameActive = true;

    displayBoard();

    startTimer();
}

// ==========================================
// RESTART CURRENT GAME
// ==========================================

function restartGame() {

    if (!gameActive) {
        return;
    }

    currentBoard = cloneBoard(originalPuzzle);

    mistakes = 0;
    selectedCell = null;

    mistakeDisplay.textContent = "0";
    messageDisplay.textContent = "";

    displayBoard();

    startTimer();
}

// ==========================================
// END GAME
// ==========================================

function endGame(won) {

    gameActive = false;

    clearInterval(timerInterval);

    gameScreen.hidden = true;
    resultScreen.hidden = false;

    if (won) {

        resultTitle.textContent = "Congratulations!";

        resultMessage.textContent =
            "You solved the Sudoku puzzle in " +
            timerDisplay.textContent +
            " with " + mistakes + " mistake(s)!";

    }
    else {

        resultTitle.textContent = "Challenge Over!";

        resultMessage.textContent =
            "You reached the maximum of 3 mistakes. Try again!";
    }
}

// ==========================================
// NEW GAME
// ==========================================

function newGame() {

    clearInterval(timerInterval);

    settingsScreen.hidden = false;
    gameScreen.hidden = true;
    resultScreen.hidden = true;

    gameActive = false;
    selectedCell = null;
}

// ==========================================
// HINT FUNCTION
// ==========================================

function giveHint() {

    if (!gameActive || selectedCell === null) {
        messageDisplay.textContent = "Select an empty cell first!";
        return;
    }

    const { row, col } = selectedCell;

    if (originalPuzzle[row][col] !== 0) {
        messageDisplay.textContent = "Select an empty cell!";
        return;
    }

    if (currentBoard[row][col] !== 0) {
        messageDisplay.textContent = "This cell is already filled!";
        return;
    }

    currentBoard[row][col] = solution[row][col];

    messageDisplay.textContent = "Hint used! Correct number revealed.";

    displayBoard();

    checkCompletion();
}

// ==========================================
// BUTTON EVENTS
// ==========================================

startButton.addEventListener("click", startGame);

restartButton.addEventListener("click", restartGame);

newGameButton.addEventListener("click", newGame);

hintButton.addEventListener("click", giveHint);

playAgainButton.addEventListener("click", startGame);

// ==========================================
// KEYBOARD SUPPORT
// ==========================================

document.addEventListener("keydown", event => {

    if (!gameActive) {
        return;
    }

    if (event.key >= "1" && event.key <= "9") {
        enterNumber(Number(event.key));
    }

    if (event.key === "Backspace" || event.key === "Delete") {
        enterNumber(0);
    }
});

