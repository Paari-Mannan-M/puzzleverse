const guessDifficulty = document.getElementById("guess-difficulty");
const newGuessButton = document.getElementById("new-guess-game");

const guessWordDisplay = document.getElementById("guess-word");
const guessCategoryDisplay = document.getElementById("guess-category");
const guessHintDisplay = document.getElementById("guess-hint");
const guessKeyboard = document.getElementById("guess-keyboard");
const guessMessage = document.getElementById("guess-message");

const guessScoreDisplay = document.getElementById("guess-score");
const guessAttemptsDisplay = document.getElementById("guess-attempts");
const guessProgressDisplay = document.getElementById("guess-progress");

const nextGuessButton = document.getElementById("next-guess-word");
const guessGameSection = document.querySelector(".word-guess-game");
const guessResultSection = document.getElementById("guess-result");

const guessFinalScore = document.getElementById("guess-final-score");
const guessFinalMessage = document.getElementById("guess-final-message");
const guessPlayAgainButton = document.getElementById("guess-play-again");

// Word bank
const guessWordBanks = {
    easy: [
        { word: "APPLE", category: "Fruits", hint: "A fruit that can be red or green." },
        { word: "TIGER", category: "Animals", hint: "A large striped wild cat." },
        { word: "CHAIR", category: "Objects", hint: "Something you sit on." },
        { word: "MANGO", category: "Fruits", hint: "A tropical fruit with a large seed." },
        { word: "PLANT", category: "Nature", hint: "A living thing that grows in soil." },
        { word: "BREAD", category: "Food", hint: "A common bakery food." },
        { word: "RIVER", category: "Nature", hint: "A natural flowing body of water." },
        { word: "HORSE", category: "Animals", hint: "An animal commonly used for riding." },
        { word: "CLOUD", category: "Nature", hint: "A shape seen floating in the sky." },
        { word: "GRAPE", category: "Fruits", hint: "A small fruit that grows in bunches." },
        { word: "SHEEP", category: "Animals", hint: "An animal that produces wool." },
        { word: "MUSIC", category: "Entertainment", hint: "A combination of sounds and rhythms." },
        { word: "HOUSE", category: "Places", hint: "A place where people live." },
        { word: "SMILE", category: "General", hint: "An expression of happiness." },
        { word: "WATER", category: "Nature", hint: "A liquid essential for life." }
    ],

    medium: [
        { word: "PLANET", category: "Science", hint: "A celestial body that orbits a star." },
        { word: "GARDEN", category: "Nature", hint: "A place where flowers and plants grow." },
        { word: "BRIDGE", category: "Structures", hint: "A structure built over a river or road." },
        { word: "PYTHON", category: "Programming", hint: "A popular programming language." },
        { word: "PUZZLE", category: "Games", hint: "A problem that requires thinking to solve." },
        { word: "SCHOOL", category: "Education", hint: "A place where students learn." },
        { word: "ORANGE", category: "Fruits", hint: "A citrus fruit and also a colour." },
        { word: "MONKEY", category: "Animals", hint: "A primate that often lives in trees." },
        { word: "CAMERA", category: "Technology", hint: "A device used to capture photographs." },
        { word: "ROCKET", category: "Space", hint: "A vehicle designed for space travel." },
        { word: "COMPASS", category: "Objects", hint: "A device used to find directions." },
        { word: "LIBRARY", category: "Education", hint: "A place where books are stored." },
        { word: "RAINBOW", category: "Nature", hint: "A colourful arc that can appear after rain." },
        { word: "BATTERY", category: "Technology", hint: "A device that stores electrical energy." },
        { word: "JOURNEY", category: "General", hint: "A trip from one place to another." }
    ],

    hard: [
        { word: "ALGORITHM", category: "Programming", hint: "A step-by-step method for solving a problem." },
        { word: "ELEPHANT", category: "Animals", hint: "A large mammal with a trunk." },
        { word: "KEYBOARD", category: "Technology", hint: "An input device used to type." },
        { word: "UNIVERSE", category: "Space", hint: "Everything that exists in space and time." },
        { word: "EDUCATION", category: "Learning", hint: "The process of gaining knowledge." },
        { word: "COMPUTER", category: "Technology", hint: "An electronic device that processes data." },
        { word: "ASTRONOMY", category: "Science", hint: "The study of stars, planets and space." },
        { word: "CHOCOLATE", category: "Food", hint: "A sweet food made from cocoa." },
        { word: "MOUNTAIN", category: "Nature", hint: "A large natural elevation of land." },
        { word: "DISCOVERY", category: "General", hint: "Finding something previously unknown." },
        { word: "LANGUAGE", category: "Education", hint: "A system used for communication." },
        { word: "TREASURE", category: "General", hint: "Something valuable that may be hidden." },
        { word: "NOTEBOOK", category: "Objects", hint: "A book used for writing notes." },
        { word: "HOSPITAL", category: "Places", hint: "A place where people receive medical care." },
        { word: "KEYSTONE", category: "Structures", hint: "The central supporting stone of an arch." }
    ]
};

let guessQuestions = [];
let currentGuessIndex = 0;
let currentAttempts = 6;
let guessScore = 0;
let guessedLetters = new Set();
let guessGameActive = false;
let currentWordWon = false;

// Shuffle words
function shuffleGuessWords(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// Update statistics
function updateGuessStats() {
    guessScoreDisplay.textContent = guessScore;
    guessAttemptsDisplay.textContent = currentAttempts;

    guessProgressDisplay.textContent =
        `${currentGuessIndex + (currentWordWon ? 1 : 0)}/10`;
}

// Display hidden word
function displayHiddenWord() {
    const word = guessQuestions[currentGuessIndex].word;

    guessWordDisplay.textContent = word
        .split("")
        .map(letter => guessedLetters.has(letter) ? letter : "_")
        .join(" ");

    const allLettersGuessed = word
        .split("")
        .every(letter => guessedLetters.has(letter));

    if (allLettersGuessed) {
        winGuessWord();
    }
}

// Create alphabet keyboard
function createGuessKeyboard() {
    guessKeyboard.innerHTML = "";

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (const letter of alphabet) {
        const button = document.createElement("button");

        button.textContent = letter;
        button.type = "button";
        button.dataset.letter = letter;

        button.addEventListener("click", () => {
            handleGuess(letter, button);
        });

        guessKeyboard.appendChild(button);
    }
}

// Load a word
function loadGuessWord() {
    const question = guessQuestions[currentGuessIndex];

    currentAttempts = 6;
    guessedLetters = new Set();
    currentWordWon = false;

    guessCategoryDisplay.textContent = question.category;
    guessHintDisplay.textContent = question.hint;

    guessMessage.textContent = "Select a letter to begin!";

    nextGuessButton.hidden = true;

    createGuessKeyboard();
    displayHiddenWord();
    updateGuessStats();
}

// Handle a letter guess
function handleGuess(letter, button) {
    if (!guessGameActive || currentWordWon || currentAttempts <= 0) {
        return;
    }

    if (guessedLetters.has(letter)) {
        return;
    }

    guessedLetters.add(letter);
    button.disabled = true;

    const word = guessQuestions[currentGuessIndex].word;

    if (word.includes(letter)) {
        button.classList.add("correct");
        guessMessage.textContent = "Correct letter! Keep going.";
        displayHiddenWord();
    } else {
        button.classList.add("wrong");
        currentAttempts--;

        guessMessage.textContent =
            `Incorrect letter! ${currentAttempts} attempts remaining.`;

        if (currentAttempts === 0) {
            loseGuessWord();
        }
    }

    updateGuessStats();
}

// Handle winning
function winGuessWord() {
    if (currentWordWon) return;

    currentWordWon = true;

    const points = currentAttempts * 5 + 10;

    guessScore += points;

    guessMessage.textContent =
        `Excellent! You found the word and earned ${points} points.`;

    nextGuessButton.hidden = false;

    disableGuessKeyboard();
    updateGuessStats();
}

// Handle losing
function loseGuessWord() {
    const correctWord = guessQuestions[currentGuessIndex].word;

    guessWordDisplay.textContent = correctWord.split("").join(" ");

    guessMessage.textContent =
        `No attempts left! The correct word was ${correctWord}.`;

    nextGuessButton.hidden = false;

    disableGuessKeyboard();
    updateGuessStats();
}

// Disable all keyboard buttons
function disableGuessKeyboard() {
    guessKeyboard.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}

// Move to next word
function nextGuessWord() {
    if (!guessGameActive) return;

    currentGuessIndex++;

    if (currentGuessIndex >= 10) {
        finishGuessGame();
        return;
    }

    loadGuessWord();
}

// Finish game
function finishGuessGame() {
    guessGameActive = false;

    guessGameSection.hidden = true;
    guessResultSection.hidden = false;

    guessFinalScore.textContent = guessScore;

    const solved = guessQuestions.filter((question, index) => {
        return index < currentGuessIndex;
    }).length;

    guessFinalMessage.textContent =
        `You completed all 10 words. Keep practising to improve your score!`;

    guessProgressDisplay.textContent = "10/10";
}

// Start a new game
function startGuessGame() {
    const difficulty = guessDifficulty.value;

    guessQuestions = shuffleGuessWords(
        guessWordBanks[difficulty]
    ).slice(0, 10);

    currentGuessIndex = 0;
    guessScore = 0;
    currentAttempts = 6;
    guessedLetters = new Set();

    guessGameActive = true;
    currentWordWon = false;

    guessGameSection.hidden = false;
    guessResultSection.hidden = true;

    guessScoreDisplay.textContent = "0";
    guessProgressDisplay.textContent = "0/10";

    loadGuessWord();
}

// Buttons
newGuessButton.addEventListener("click", startGuessGame);
nextGuessButton.addEventListener("click", nextGuessWord);
guessPlayAgainButton.addEventListener("click", startGuessGame);

// Start the first game
startGuessGame();

// Physical keyboard support (A-Z)
document.addEventListener("keydown", function(event) {
    const letter = event.key.toUpperCase();

    if (/^[A-Z]$/.test(letter)) {
        handleGuess(letter);
    }
});