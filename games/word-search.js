const wordGrid = document.getElementById("word-grid");
const wordList = document.getElementById("word-list");
const difficultySelect = document.getElementById("word-difficulty");
const startButton = document.getElementById("start-word-game");
const playAgainButton = document.getElementById("word-play-again");

const foundCount = document.getElementById("found-count");
const scoreDisplay = document.getElementById("word-score");
const timerDisplay = document.getElementById("word-timer");
const messageDisplay = document.getElementById("word-message");

const GRID_SIZE = 10;
const directions = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
    [1, 1], [1, -1],
    [-1, 1], [-1, -1]
];

const wordBanks = {
    easy: ["CAT", "SUN", "TREE", "BOOK", "STAR", "FISH"],
    medium: ["PLANET", "GARDEN", "PUZZLE", "BRIDGE", "SCHOOL", "FLOWER", "MONKEY", "ORANGE"],
    hard: ["COMPUTER", "ELEPHANT", "KEYBOARD", "NOTEBOOK", "LANGUAGE", "MOUNTAIN", "TREASURE", "HOSPITAL", "RAINBOW", "UNIVERSE"]
};

let grid = [];
let selectedWords = [];
let foundWords = new Set();
let foundCells = new Set();
let score = 0;
let seconds = 0;
let timerInterval = null;
let isSelecting = false;
let startCell = null;
let currentSelection = [];

// Generate an empty grid
function createEmptyGrid() {
    return Array.from(
        { length: GRID_SIZE },
        () => Array(GRID_SIZE).fill("")
    );
}

// Check whether a word can fit in a direction
function canPlaceWord(word, row, col, rowDir, colDir) {
    for (let i = 0; i < word.length; i++) {
        const newRow = row + i * rowDir;
        const newCol = col + i * colDir;

        if (
            newRow < 0 || newRow >= GRID_SIZE ||
            newCol < 0 || newCol >= GRID_SIZE
        ) {
            return false;
        }

        const existingLetter = grid[newRow][newCol];

        if (existingLetter !== "" && existingLetter !== word[i]) {
            return false;
        }
    }

    return true;
}

// Place a word randomly
function placeWord(word) {
    for (let attempt = 0; attempt < 300; attempt++) {
        const [rowDir, colDir] =
            directions[Math.floor(Math.random() * directions.length)];

        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);

        if (canPlaceWord(word, row, col, rowDir, colDir)) {
            for (let i = 0; i < word.length; i++) {
                const newRow = row + i * rowDir;
                const newCol = col + i * colDir;

                grid[newRow][newCol] = word[i];
            }

            return true;
        }
    }

    return false;
}

// Fill empty cells with random letters
function fillEmptyCells() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (grid[row][col] === "") {
                grid[row][col] =
                    letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }
}

// Create the puzzle
function generatePuzzle() {
    grid = createEmptyGrid();

    const difficulty = difficultySelect.value;
    selectedWords = [...wordBanks[difficulty]];

    // Shuffle word order before placing
    selectedWords.sort(() => Math.random() - 0.5);

    const successfullyPlaced = [];

    selectedWords.forEach(word => {
        if (placeWord(word)) {
            successfullyPlaced.push(word);
        }
    });

    selectedWords = successfullyPlaced;

    fillEmptyCells();
}

// Display the letter grid
function displayGrid() {
    wordGrid.innerHTML = "";
    wordGrid.style.gridTemplateColumns =
        `repeat(${GRID_SIZE}, 1fr)`;

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            const cell = document.createElement("div");

            cell.className = "word-cell";
            cell.textContent = grid[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;

            wordGrid.appendChild(cell);
        }
    }

    updateFoundCellStyles();
}

// Display the word list
function displayWordList() {
    wordList.innerHTML = "";

    selectedWords.forEach(word => {
        const item = document.createElement("li");

        item.className = "word-item";
        item.textContent = word;
        item.dataset.word = word;

        wordList.appendChild(item);
    });
}

// Update the appearance of found cells
function updateFoundCellStyles() {
    wordGrid.querySelectorAll(".word-cell").forEach(cell => {
        const key = `${cell.dataset.row},${cell.dataset.col}`;

        cell.classList.toggle("found", foundCells.has(key));
        cell.classList.remove("selected");
    });

    currentSelection.forEach(cell => {
        const key = `${cell.row},${cell.col}`;

        if (!foundCells.has(key)) {
            const element = wordGrid.querySelector(
                `[data-row="${cell.row}"][data-col="${cell.col}"]`
            );

            if (element) {
                element.classList.add("selected");
            }
        }
    });
}

// Get a straight-line selection between two cells
function getSelectionPath(start, end) {
    const rowDiff = end.row - start.row;
    const colDiff = end.col - start.col;

    const rowStep = Math.sign(rowDiff);
    const colStep = Math.sign(colDiff);

    if (
        rowDiff !== 0 &&
        colDiff !== 0 &&
        Math.abs(rowDiff) !== Math.abs(colDiff)
    ) {
        return [];
    }

    const length = Math.max(
        Math.abs(rowDiff),
        Math.abs(colDiff)
    );

    const path = [];

    for (let i = 0; i <= length; i++) {
        path.push({
            row: start.row + i * rowStep,
            col: start.col + i * colStep
        });
    }

    return path;
}

// Read the letters in a selection
function getSelectedWord(path) {
    return path.map(cell => grid[cell.row][cell.col]).join("");
}

// Check whether the selected letters form a word
function checkSelection(path) {
    if (path.length < 2) return;

    const selected = getSelectedWord(path);
    const reversed = selected.split("").reverse().join("");

    const matchedWord = selectedWords.find(word =>
        !foundWords.has(word) &&
        (word === selected || word === reversed)
    );

    if (matchedWord) {
        foundWords.add(matchedWord);

        path.forEach(cell => {
            foundCells.add(`${cell.row},${cell.col}`);
        });

        score += 10;

        const wordItem = wordList.querySelector(
            `[data-word="${matchedWord}"]`
        );

        if (wordItem) {
            wordItem.classList.add("found");
        }

        messageDisplay.textContent = `Correct! You found ${matchedWord}.`;

        updateScore();
        updateFoundCellStyles();

        if (foundWords.size === selectedWords.length) {
            finishGame();
        }
    } else {
        messageDisplay.textContent = "Not a matching word. Try again!";
        currentSelection = [];
        updateFoundCellStyles();
    }
}

// Update score and found count
function updateScore() {
    scoreDisplay.textContent = score;
    foundCount.textContent =
        `${foundWords.size}/${selectedWords.length}`;
}

// Update timer display
function updateTimer() {
    seconds++;

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

// Stop the game
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Finish the game
function finishGame() {
    stopTimer();
    messageDisplay.textContent =
        `Congratulations! You found all ${selectedWords.length} words. Final score: ${score}`;
}

// Start a new game
function startWordGame() {
    stopTimer();

    foundWords = new Set();
    foundCells = new Set();
    currentSelection = [];

    score = 0;
    seconds = 0;

    isSelecting = false;
    startCell = null;

    messageDisplay.textContent = "Find all the hidden words!";

    generatePuzzle();
    displayGrid();
    displayWordList();

    updateScore();
    timerDisplay.textContent = "00:00";

    timerInterval = setInterval(updateTimer, 1000);
}

// Find a cell under a pointer position
function getCellFromPoint(x, y) {
    const element = document.elementFromPoint(x, y);

    if (!element) return null;

    const cell = element.closest(".word-cell");

    if (!cell || !wordGrid.contains(cell)) return null;

    return {
        row: Number(cell.dataset.row),
        col: Number(cell.dataset.col)
    };
}

// Begin selecting letters
wordGrid.addEventListener("pointerdown", event => {
    const cell = event.target.closest(".word-cell");

    if (!cell || foundWords.size === selectedWords.length) return;

    isSelecting = true;

    startCell = {
        row: Number(cell.dataset.row),
        col: Number(cell.dataset.col)
    };

    currentSelection = [startCell];

    updateFoundCellStyles();
});

// Update selection while dragging
wordGrid.addEventListener("pointermove", event => {
    if (!isSelecting || !startCell) return;

    const endCell = getCellFromPoint(
        event.clientX,
        event.clientY
    );

    if (!endCell) return;

    currentSelection = getSelectionPath(startCell, endCell);

    updateFoundCellStyles();
});

// Complete selection
function finishSelection() {
    if (!isSelecting) return;

    isSelecting = false;

    checkSelection(currentSelection);

    startCell = null;
}

document.addEventListener("pointerup", finishSelection);
document.addEventListener("pointercancel", finishSelection);

// Button events
startButton.addEventListener("click", startWordGame);
playAgainButton.addEventListener("click", startWordGame);

// Start the first puzzle automatically
startWordGame();

