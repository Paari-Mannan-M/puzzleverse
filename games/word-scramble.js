const scrambleDifficulty = document.getElementById("scramble-difficulty");
const newScrambleButton = document.getElementById("new-scramble-game");
const scrambledWordDisplay = document.getElementById("scrambled-word");
const scrambleHintDisplay = document.getElementById("scramble-hint");
const scrambleAnswerInput = document.getElementById("scramble-answer");
const checkScrambleButton = document.getElementById("check-scramble-answer");
const hintScrambleButton = document.getElementById("scramble-hint-button");
const skipScrambleButton = document.getElementById("skip-scramble-word");
const scrambleMessage = document.getElementById("scramble-message");

const scrambleScoreDisplay = document.getElementById("scramble-score");
const scrambleTimerDisplay = document.getElementById("scramble-timer");
const scrambleProgressDisplay = document.getElementById("scramble-progress");

const scrambleGameSection = document.querySelector(".scramble-game");
const scrambleResultSection = document.getElementById("scramble-result");
const scrambleFinalScore = document.getElementById("scramble-final-score");
const scrambleFinalMessage = document.getElementById("scramble-final-message");
const scramblePlayAgainButton = document.getElementById("scramble-play-again");

const scrambleWordBanks = {
    easy: [
        { word: "APPLE", hint: "A fruit that can be red or green." },
        { word: "CHAIR", hint: "Something you sit on." },
        { word: "BREAD", hint: "A common bakery food." },
        { word: "TIGER", hint: "A large striped wild cat." },
        { word: "PLANT", hint: "A living thing that grows in soil." },
        { word: "WATER", hint: "A liquid essential for life." },
        { word: "HOUSE", hint: "A place where people live." },
        { word: "SMILE", hint: "An expression showing happiness." },
        { word: "CLOUD", hint: "A white or grey shape in the sky." },
        { word: "MUSIC", hint: "Sounds arranged in a pleasant way." },
        { word: "GRAPE", hint: "A small fruit that grows in bunches." },
        { word: "LIGHT", hint: "It helps us see things." },
        { word: "RIVER", hint: "A natural flowing body of water." },
        { word: "SUGAR", hint: "A sweet ingredient used in food." },
        { word: "MANGO", hint: "A tropical fruit with a large seed." },
        { word: "SHEEP", hint: "An animal that produces wool." }
    ],

    medium: [
        { word: "JOURNEY", hint: "A trip from one place to another." },
        { word: "LIBRARY", hint: "A place where books are kept." },
        { word: "DIAMOND", hint: "A precious gemstone." },
        { word: "RAINBOW", hint: "A colourful arc seen after rain." },
        { word: "CAPTAIN", hint: "The person in charge of a ship or team." },
        { word: "PICTURE", hint: "An image or photograph." },
        { word: "SCIENCE", hint: "The study of the natural world." },
        { word: "COUNTRY", hint: "A nation with its own government." },
        { word: "HISTORY", hint: "The study of past events." },
        { word: "NETWORK", hint: "A group of connected computers." },
        { word: "KITCHEN", hint: "A room where food is prepared." },
        { word: "LIBERTY", hint: "The state of being free." },
        { word: "FORESTS", hint: "Large areas covered with trees." },
        { word: "COMPASS", hint: "A device used to find directions." },
        { word: "VILLAGE", hint: "A small community in the countryside." },
        { word: "BATTERY", hint: "A device that stores electrical energy." }
    ],

    hard: [
        { word: "ALGORITHM", hint: "A step-by-step method for solving a problem." },
        { word: "EDUCATION", hint: "The process of gaining knowledge." },
        { word: "ADVENTURE", hint: "An exciting or unusual experience." },
        { word: "KNOWLEDGE", hint: "Information and understanding gained through learning." },
        { word: "CHOCOLATE", hint: "A sweet food made from cocoa." },
        { word: "UNIVERSE", hint: "Everything that exists in space and time." },
        { word: "TECHNOLOGY", hint: "The use of scientific knowledge for practical purposes." },
        { word: "DISCOVERY", hint: "Finding something that was previously unknown." },
        { word: "IMPORTANT", hint: "Something having great value or significance." },
        { word: "LANGUAGE", hint: "A system used for human communication." },
        { word: "COMPUTER", hint: "An electronic device that processes data." },
        { word: "DEMOCRACY", hint: "A system of government by the people." },
        { word: "CREATIVITY", hint: "The ability to produce original ideas." },
        { word: "ASTRONOMY", hint: "The study of stars, planets and space." },
        { word: "PROGRAMMING", hint: "Writing instructions for computers." },
        { word: "ENGINEERING", hint: "Applying science and mathematics to design solutions." }
    ]
};

let scrambleQuestions = [];
let currentScrambleIndex = 0;
let scrambleScore = 0;
let scrambleSeconds = 0;
let scrambleTimerInterval = null;
let hintUsed = false;
let scrambleGameActive = false;

// Shuffle an array
function shuffleScrambleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// Create scrambled letters different from the original word
function scrambleLetters(word) {
    let letters = word.split("");

    for (let attempt = 0; attempt < 20; attempt++) {
        letters = shuffleScrambleArray(letters);

        if (letters.join("") !== word) {
            return letters.join("");
        }
    }

    // Fallback for any rare repeated shuffle result
    return word.slice(1) + word[0];
}

// Display current question
function displayScrambleQuestion() {
    const question = scrambleQuestions[currentScrambleIndex];

    scrambledWordDisplay.textContent = scrambleLetters(question.word);
    scrambleHintDisplay.textContent = "Use the hint if you need help.";

    scrambleAnswerInput.value = "";
    scrambleAnswerInput.disabled = false;
    checkScrambleButton.disabled = false;
    hintScrambleButton.disabled = false;
    skipScrambleButton.disabled = false;

    hintUsed = false;

    scrambleMessage.textContent = "Enter the correct word to earn points!";

    scrambleAnswerInput.focus();
    updateScrambleProgress();
}

// Update score and progress
function updateScrambleProgress() {
    scrambleScoreDisplay.textContent = scrambleScore;

    scrambleProgressDisplay.textContent =
        `${currentScrambleIndex + 1}/10`;
}

// Check the answer
function checkScrambleAnswer() {
    if (!scrambleGameActive) return;

    const answer = scrambleAnswerInput.value.trim().toUpperCase();

    if (!answer) {
        scrambleMessage.textContent = "Please enter a word first.";
        return;
    }

    const correctWord = scrambleQuestions[currentScrambleIndex].word;

    if (answer === correctWord) {
        const points = hintUsed ? 5 : 10;

        scrambleScore += points;

        scrambleMessage.textContent =
            `Correct! You earned ${points} points.`;

        scrambleAnswerInput.disabled = true;
        checkScrambleButton.disabled = true;
        hintScrambleButton.disabled = true;
        skipScrambleButton.disabled = true;

        scrambleScoreDisplay.textContent = scrambleScore;

        setTimeout(nextScrambleQuestion, 900);
    } else {
        scrambleMessage.textContent = "Incorrect! Try again.";
        scrambleAnswerInput.select();
    }
}

// Show hint
function showScrambleHint() {
    if (!scrambleGameActive || hintUsed) return;

    const question = scrambleQuestions[currentScrambleIndex];

    scrambleHintDisplay.textContent = `Hint: ${question.hint}`;

    hintUsed = true;
    hintScrambleButton.disabled = true;

    scrambleMessage.textContent =
        "Hint used! A correct answer will now earn 5 points.";
}

// Skip current word
function skipScrambleQuestion() {
    if (!scrambleGameActive) return;

    scrambleMessage.textContent =
        `Skipped! The correct word was ${scrambleQuestions[currentScrambleIndex].word}.`;

    scrambleAnswerInput.disabled = true;
    checkScrambleButton.disabled = true;
    hintScrambleButton.disabled = true;
    skipScrambleButton.disabled = true;

    setTimeout(nextScrambleQuestion, 900);
}

// Move to next question
function nextScrambleQuestion() {
    if (!scrambleGameActive) return;

    currentScrambleIndex++;

    if (currentScrambleIndex >= 10) {
        finishScrambleGame();
        return;
    }

    displayScrambleQuestion();
}

// Timer
function updateScrambleTimer() {
    scrambleSeconds++;

    const minutes = Math.floor(scrambleSeconds / 60);
    const seconds = scrambleSeconds % 60;

    scrambleTimerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Stop timer
function stopScrambleTimer() {
    clearInterval(scrambleTimerInterval);
    scrambleTimerInterval = null;
}

// Finish game
function finishScrambleGame() {
    scrambleGameActive = false;

    stopScrambleTimer();

    scrambleGameSection.hidden = true;
    scrambleResultSection.hidden = false;

    scrambleFinalScore.textContent = scrambleScore;

    if (scrambleScore >= 90) {
        scrambleFinalMessage.textContent = "Excellent work! You solved almost every word.";
    } else if (scrambleScore >= 60) {
        scrambleFinalMessage.textContent = "Good job! Keep practising your word skills.";
    } else {
        scrambleFinalMessage.textContent = "Nice attempt! Try again to improve your score.";
    }

    scrambleProgressDisplay.textContent = "10/10";
}

// Start a new game
function startScrambleGame() {
    stopScrambleTimer();

    const difficulty = scrambleDifficulty.value;

    scrambleQuestions = shuffleScrambleArray(
        scrambleWordBanks[difficulty]
    ).slice(0, 10);

    currentScrambleIndex = 0;
    scrambleScore = 0;
    scrambleSeconds = 0;
    hintUsed = false;
    scrambleGameActive = true;

    scrambleGameSection.hidden = false;
    scrambleResultSection.hidden = true;

    scrambleTimerDisplay.textContent = "00:00";
    scrambleScoreDisplay.textContent = "0";

    displayScrambleQuestion();

    scrambleTimerInterval = setInterval(
        updateScrambleTimer,
        1000
    );
}

// Button events
checkScrambleButton.addEventListener(
    "click",
    checkScrambleAnswer
);

scrambleAnswerInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkScrambleAnswer();
    }
});

hintScrambleButton.addEventListener(
    "click",
    showScrambleHint
);

skipScrambleButton.addEventListener(
    "click",
    skipScrambleQuestion
);

newScrambleButton.addEventListener(
    "click",
    startScrambleGame
);

scramblePlayAgainButton.addEventListener(
    "click",
    startScrambleGame
);

// Start first game
startScrambleGame();

