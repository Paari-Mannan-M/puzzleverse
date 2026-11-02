// ======================================
// NUMBER SEQUENCE - PUZZLEVERSE
// ======================================

const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start-game");

const scoreElement = document.getElementById("sequence-score");
const questionElement = document.getElementById("question-number");
const timerElement = document.getElementById("sequence-timer");
const progressBar = document.getElementById("progress-bar");

const sequenceDisplay = document.getElementById("number-sequence");
const optionsContainer = document.getElementById("sequence-options");
const messageElement = document.getElementById("sequence-message");

const nextButton = document.getElementById("next-question");

const gameSection = document.getElementById("sequence-game");
const resultSection = document.getElementById("sequence-result");

const finalScoreElement = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const playAgainButton = document.getElementById("play-again");

// ======================================
// GAME SETTINGS
// ======================================

const TOTAL_QUESTIONS = 10;
const QUESTION_TIME = 15;

let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = QUESTION_TIME;
let timer = null;
let answered = false;
let gameStarted = false;

// ======================================
// QUESTION BANK
// ======================================

// Each question has:
// sequence = numbers shown
// answer = correct missing number
// options = four possible answers

const questionBank = {

    easy: [

        { sequence: [2, 4, 6, 8, 0, 12], answer: 10, options: [9, 10, 11, 14] },
        { sequence: [5, 10, 15, 20, 0, 30], answer: 25, options: [22, 25, 28, 35] },
        { sequence: [3, 6, 9, 12, 0, 18], answer: 15, options: [14, 15, 16, 21] },
        { sequence: [1, 3, 5, 7, 0, 11], answer: 9, options: [8, 9, 10, 13] },
        { sequence: [10, 20, 30, 40, 0, 60], answer: 50, options: [45, 50, 55, 70] },

        { sequence: [2, 4, 8, 16, 0, 64], answer: 32, options: [24, 30, 32, 36] },
        { sequence: [1, 2, 4, 8, 0, 32], answer: 16, options: [12, 14, 16, 20] },
        { sequence: [100, 90, 80, 70, 0, 50], answer: 60, options: [55, 60, 65, 75] },
        { sequence: [50, 45, 40, 35, 0, 25], answer: 30, options: [28, 30, 32, 40] },
        { sequence: [1, 4, 7, 10, 0, 16], answer: 13, options: [12, 13, 14, 15] },

        { sequence: [2, 5, 8, 11, 0, 17], answer: 14, options: [13, 14, 15, 16] },
        { sequence: [20, 18, 16, 14, 0, 10], answer: 12, options: [11, 12, 13, 15] },
        { sequence: [3, 6, 12, 24, 0, 96], answer: 48, options: [36, 42, 48, 54] },
        { sequence: [1, 4, 9, 16, 0, 36], answer: 25, options: [20, 24, 25, 30] },
        { sequence: [1, 8, 27, 64, 0, 216], answer: 125, options: [100, 125, 150, 175] },

        { sequence: [7, 14, 21, 28, 0, 42], answer: 35, options: [32, 35, 38, 40] },
        { sequence: [100, 80, 60, 40, 0, 0], answer: 20, options: [10, 15, 20, 25] },
        { sequence: [4, 8, 12, 16, 0, 24], answer: 20, options: [18, 20, 22, 26] },
        { sequence: [11, 22, 33, 44, 0, 66], answer: 55, options: [50, 55, 60, 65] },
        { sequence: [1, 3, 6, 10, 0, 21], answer: 15, options: [12, 15, 18, 20] }

    ],

    medium: [

        { sequence: [2, 6, 12, 20, 0, 42], answer: 30, options: [28, 30, 32, 36] },
        { sequence: [1, 4, 9, 16, 0, 36], answer: 25, options: [20, 24, 25, 30] },
        { sequence: [2, 3, 5, 8, 13, 0], answer: 21, options: [18, 20, 21, 23] },
        { sequence: [3, 7, 15, 31, 0, 127], answer: 63, options: [55, 60, 63, 65] },
        { sequence: [2, 5, 10, 17, 0, 37], answer: 26, options: [24, 25, 26, 28] },

        { sequence: [1, 2, 6, 24, 0, 720], answer: 120, options: [100, 110, 120, 125] },
        { sequence: [4, 9, 16, 25, 0, 49], answer: 36, options: [30, 32, 36, 40] },
        { sequence: [1, 5, 14, 30, 0, 91], answer: 55, options: [50, 52, 55, 60] },
        { sequence: [2, 6, 18, 54, 0, 486], answer: 162, options: [108, 144, 162, 180] },
        { sequence: [5, 11, 23, 47, 0, 191], answer: 95, options: [90, 95, 100, 105] },

        { sequence: [1, 4, 10, 20, 35, 0], answer: 56, options: [50, 54, 56, 60] },
        { sequence: [2, 5, 11, 23, 47, 0], answer: 95, options: [90, 93, 95, 99] },
        { sequence: [3, 8, 15, 24, 0, 48], answer: 35, options: [32, 35, 38, 40] },
        { sequence: [1, 3, 7, 15, 0, 63], answer: 31, options: [27, 29, 31, 33] },
        { sequence: [10, 13, 19, 28, 40, 0], answer: 55, options: [50, 52, 55, 58] },

        { sequence: [2, 7, 14, 23, 34, 0], answer: 47, options: [44, 46, 47, 50] },
        { sequence: [1, 2, 5, 14, 41, 0], answer: 122, options: [110, 120, 122, 125] },
        { sequence: [4, 12, 36, 108, 0, 972], answer: 324, options: [300, 312, 324, 360] },
        { sequence: [81, 27, 9, 3, 0, 1/3], answer: 1, options: [0, 1, 2, 3] },
        { sequence: [2, 4, 12, 48, 0, 1440], answer: 240, options: [180, 200, 240, 280] }

    ],

    hard: [

        { sequence: [1, 2, 6, 24, 120, 0], answer: 720, options: [600, 700, 720, 840] },
        { sequence: [2, 3, 5, 9, 17, 0], answer: 33, options: [29, 31, 33, 35] },
        { sequence: [1, 4, 13, 40, 121, 0], answer: 364, options: [360, 362, 364, 366] },
        { sequence: [3, 8, 18, 38, 78, 0], answer: 158, options: [150, 154, 158, 162] },
        { sequence: [2, 9, 28, 65, 126, 0], answer: 217, options: [210, 215, 217, 225] },

        { sequence: [1, 2, 5, 16, 65, 0], answer: 326, options: [320, 324, 326, 330] },
        { sequence: [2, 4, 16, 96, 768, 0], answer: 7680, options: [7000, 7200, 7680, 8000] },
        { sequence: [1, 5, 19, 65, 211, 0], answer: 665, options: [650, 660, 665, 670] },
        { sequence: [4, 10, 22, 46, 94, 0], answer: 190, options: [180, 185, 190, 195] },
        { sequence: [2, 12, 36, 80, 150, 0], answer: 252, options: [240, 250, 252, 260] },

        { sequence: [1, 8, 27, 64, 125, 0], answer: 216, options: [200, 210, 216, 225] },
        { sequence: [2, 10, 30, 68, 130, 0], answer: 222, options: [210, 220, 222, 230] },
        { sequence: [3, 12, 33, 72, 135, 0], answer: 228, options: [220, 225, 228, 235] },
        { sequence: [1, 6, 17, 34, 57, 0], answer: 86, options: [80, 84, 86, 90] },
        { sequence: [2, 7, 22, 67, 202, 0], answer: 607, options: [600, 605, 607, 610] },

        { sequence: [1, 3, 12, 60, 360, 0], answer: 2520, options: [2400, 2500, 2520, 2600] },
        { sequence: [5, 14, 41, 122, 365, 0], answer: 1094, options: [1080, 1090, 1094, 1100] },
        { sequence: [2, 8, 26, 80, 242, 0], answer: 728, options: [720, 725, 728, 735] },
        { sequence: [3, 10, 31, 94, 283, 0], answer: 850, options: [840, 845, 850, 855] },
        { sequence: [1, 7, 25, 79, 241, 0], answer: 727, options: [720, 725, 727, 730] }

    ]

};

// ======================================
// SHUFFLE QUESTIONS
// ======================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// ======================================
// START GAME
// ======================================

function startGame() {

    clearInterval(timer);

    const difficulty = difficultySelect.value;

    questions = shuffleArray(questionBank[difficulty])
        .slice(0, TOTAL_QUESTIONS);

    currentQuestion = 0;
    score = 0;
    gameStarted = true;

    gameSection.style.display = "block";
    resultSection.style.display = "none";

    loadQuestion();
}

// ======================================
// LOAD QUESTION
// ======================================

function loadQuestion() {

    clearInterval(timer);

    if (currentQuestion >= TOTAL_QUESTIONS) {
        endGame();
        return;
    }

    answered = false;
    timeLeft = QUESTION_TIME;

    const question = questions[currentQuestion];

    scoreElement.textContent = score;

    questionElement.textContent =
        `${currentQuestion + 1}/${TOTAL_QUESTIONS}`;

    timerElement.textContent = timeLeft;

    progressBar.style.width =
        `${(currentQuestion / TOTAL_QUESTIONS) * 100}%`;

    messageElement.textContent = "";

    nextButton.disabled = true;

    sequenceDisplay.innerHTML = "";

    question.sequence.forEach(number => {

        const span = document.createElement("span");

        if (number === 0) {
            span.textContent = "?";
            span.classList.add("missing-number");
        } else {
            span.textContent = number;
        }

        sequenceDisplay.appendChild(span);

    });

    optionsContainer.innerHTML = "";

    const shuffledOptions = shuffleArray(question.options);

    shuffledOptions.forEach(option => {

        const button = document.createElement("button");

        button.className = "sequence-option";
        button.textContent = option;

        button.addEventListener("click", function() {
            checkAnswer(option, button);
        });

        optionsContainer.appendChild(button);

    });

    startTimer();
}

// ======================================
// CHECK ANSWER
// ======================================

function checkAnswer(selectedAnswer, selectedButton) {

    if (answered || !gameStarted) return;

    answered = true;

    clearInterval(timer);

    const question = questions[currentQuestion];

    const optionButtons =
        document.querySelectorAll(".sequence-option");

    optionButtons.forEach(button => {
        button.disabled = true;

        if (Number(button.textContent) === question.answer) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === question.answer) {

        score++;

        messageElement.textContent = "Correct answer! Well done!";
        messageElement.style.color = "#16a34a";

    } else {

        selectedButton.classList.add("wrong");

        messageElement.textContent =
            `Incorrect! The correct answer is ${question.answer}.`;

        messageElement.style.color = "#dc2626";

    }

    scoreElement.textContent = score;

    nextButton.disabled = false;

}

// ======================================
// TIMER
// ======================================

function startTimer() {

    clearInterval(timer);

    timer = setInterval(function() {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            if (!answered) {

                answered = true;

                const question = questions[currentQuestion];

                const optionButtons =
                    document.querySelectorAll(".sequence-option");

                optionButtons.forEach(button => {

                    button.disabled = true;

                    if (Number(button.textContent) === question.answer) {
                        button.classList.add("correct");
                    }

                });

                messageElement.textContent =
                    `Time's up! Correct answer: ${question.answer}`;

                messageElement.style.color = "#dc2626";

                nextButton.disabled = false;

            }

        }

    }, 1000);

}

// ======================================
// NEXT QUESTION
// ======================================

function nextQuestion() {

    if (!answered) return;

    currentQuestion++;

    loadQuestion();

}

// ======================================
// END GAME
// ======================================

function endGame() {

    clearInterval(timer);

    gameStarted = false;

    gameSection.style.display = "none";
    resultSection.style.display = "block";

    progressBar.style.width = "100%";

    finalScoreElement.textContent =
        `${score}/${TOTAL_QUESTIONS}`;

    if (score === 10) {

        resultMessage.textContent =
            "Perfect score! Outstanding performance!";

    } else if (score >= 7) {

        resultMessage.textContent =
            "Excellent work! You understand number patterns very well.";

    } else if (score >= 4) {

        resultMessage.textContent =
            "Good effort! Keep practicing.";

    } else {

        resultMessage.textContent =
            "Keep learning and try again. You can improve!";

    }

}

// ======================================
// BUTTON EVENTS
// ======================================

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", nextQuestion);

playAgainButton.addEventListener("click", startGame);

// ======================================
// INITIAL DISPLAY
// ======================================

gameSection.style.display = "block";
resultSection.style.display = "none";

sequenceDisplay.textContent =
    "Choose a difficulty and press Start Game.";

optionsContainer.innerHTML = "";
nextButton.disabled = true;

scoreElement.textContent = "0";
questionElement.textContent = "0/10";
timerElement.textContent = QUESTION_TIME;


