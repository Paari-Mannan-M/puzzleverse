/* ================================
   MEMORY MATCH GAME
================================ */

// Game elements
const difficultySelect = document.getElementById("memory-difficulty");
const newGameButton = document.getElementById("memory-new-game");
const memoryGrid = document.getElementById("memory-grid");

const movesDisplay = document.getElementById("memory-moves");
const matchesDisplay = document.getElementById("memory-matches");
const timerDisplay = document.getElementById("memory-timer");
const bestScoreDisplay = document.getElementById("memory-best-score");

const messageDisplay = document.getElementById("memory-message");

const resultSection = document.getElementById("memory-result");
const finalMessage = document.getElementById("memory-final-message");
const playAgainButton = document.getElementById("memory-play-again");

// Game variables
const cardSymbols = [
    "🍎", "🚀", "🌟", "🎮", "🐱", "⚽",
    "🍕", "🎵", "🌈", "🦋", "🚗", "🎁",
    "🍉", "🐼", "🔥", "🎯", "🌻", "🧩"
];

let cards = [];
let firstCard = null;
let secondCard = null;

let moves = 0;
let matches = 0;
let totalPairs = 8;

let lockBoard = false;
let gameStarted = false;
let gameFinished = false;

let seconds = 0;
let timerInterval = null;

// Difficulty settings
const difficultySettings = {
    easy: 8,
    medium: 10,
    hard: 18
};

// Get best score key
function getBestScoreKey() {
    return "memoryBestScore_" + difficultySelect.value;
}

// Display best score
function updateBestScore() {
    const bestScore = Number(
        localStorage.getItem(getBestScoreKey())
    ) || 0;

    bestScoreDisplay.textContent = bestScore;
}

// Format timer
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}

// Update timer
function updateTimer() {
    timerDisplay.textContent = formatTime(seconds);
}

// Start timer
function startTimer() {
    if (gameStarted) return;

    gameStarted = true;

    timerInterval = setInterval(function () {
        seconds++;
        updateTimer();
    }, 1000);
}

// Stop timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Shuffle array
function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// Update game statistics
function updateStats() {
    movesDisplay.textContent = moves;
    matchesDisplay.textContent = matches + " / " + totalPairs;
}

// Create cards
function createCards() {
    const selectedSymbols = cardSymbols.slice(0, totalPairs);

    const duplicatedSymbols = [
        ...selectedSymbols,
        ...selectedSymbols
    ];

    cards = shuffleArray(duplicatedSymbols);

    memoryGrid.innerHTML = "";

    memoryGrid.className = "memory-grid";

    if (difficultySelect.value === "medium") {
        memoryGrid.classList.add("medium");
    }

    if (difficultySelect.value === "hard") {
        memoryGrid.classList.add("hard");
    }

    cards.forEach(function (symbol, index) {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "memory-card";
        card.textContent = "?";

        card.dataset.symbol = symbol;
        card.dataset.index = index;

        card.setAttribute(
            "aria-label",
            "Hidden memory card"
        );

        card.addEventListener("click", function () {
            flipCard(card);
        });

        memoryGrid.appendChild(card);
    });
}

// Flip a card
function flipCard(card) {
    if (
        lockBoard ||
        gameFinished ||
        card === firstCard ||
        card.classList.contains("matched") ||
        card.classList.contains("flipped")
    ) {
        return;
    }

    startTimer();

    card.classList.add("flipped");
    card.textContent = card.dataset.symbol;
    card.setAttribute(
        "aria-label",
        "Revealed " + card.dataset.symbol
    );

    if (firstCard === null) {
        firstCard = card;
        return;
    }

    secondCard = card;

    moves++;
    updateStats();

    checkMatch();
}

// Check whether cards match
function checkMatch() {
    const isMatch =
        firstCard.dataset.symbol === secondCard.dataset.symbol;

    if (isMatch) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        firstCard.disabled = true;
        secondCard.disabled = true;

        matches++;

        messageDisplay.textContent = "Great! You found a match!";

        resetTurn();
        updateStats();

        if (matches === totalPairs) {
            finishGame();
        }

    } else {
        lockBoard = true;

        messageDisplay.textContent = "Not a match! Try again.";

        setTimeout(function () {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            firstCard.setAttribute(
                "aria-label",
                "Hidden memory card"
            );

            secondCard.setAttribute(
                "aria-label",
                "Hidden memory card"
            );

            resetTurn();

            messageDisplay.textContent =
                "Find two matching cards!";
        }, 900);
    }
}

// Reset current turn
function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

// Finish game
function finishGame() {
    gameFinished = true;

    stopTimer();

    const score = Math.max(
        0,
        totalPairs * 100 - moves * 10 - seconds
    );

    const previousBest = Number(
        localStorage.getItem(getBestScoreKey())
    ) || 0;

    const newBest = Math.max(previousBest, score);

    localStorage.setItem(
        getBestScoreKey(),
        newBest
    );

    updateBestScore();

    resultSection.hidden = false;

    finalMessage.textContent =
        "You completed all " + totalPairs +
        " pairs in " + moves + " moves and " +
        formatTime(seconds) + "! Your score: " + score +
        (score > previousBest ? " — New best score!" : ".");

    messageDisplay.textContent = "All pairs matched!";
}

// Start a new game
function startNewGame() {
    stopTimer();

    totalPairs = difficultySettings[difficultySelect.value];

    moves = 0;
    matches = 0;
    seconds = 0;

    firstCard = null;
    secondCard = null;

    lockBoard = false;
    gameStarted = false;
    gameFinished = false;

    resultSection.hidden = true;

    messageDisplay.textContent =
        "Find two matching cards to begin!";

    updateTimer();
    updateStats();
    updateBestScore();

    createCards();
}

// Event listeners
newGameButton.addEventListener("click", startNewGame);

playAgainButton.addEventListener("click", startNewGame);

difficultySelect.addEventListener("change", startNewGame);

// Start game automatically
startNewGame();

