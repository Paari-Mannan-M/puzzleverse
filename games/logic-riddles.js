
/* =================================
   LOGIC RIDDLES GAME
================================= */

// HTML Elements
const difficultySelect = document.getElementById("riddle-difficulty");
const newGameButton = document.getElementById("riddle-new-game");

const scoreDisplay = document.getElementById("riddle-score");
const progressDisplay = document.getElementById("riddle-progress");
const correctDisplay = document.getElementById("riddle-correct");
const timerDisplay = document.getElementById("riddle-timer");

const categoryDisplay = document.getElementById("riddle-category");
const questionDisplay = document.getElementById("riddle-question");
const optionsContainer = document.getElementById("riddle-options");

const hintButton = document.getElementById("riddle-hint-button");
const hintDisplay = document.getElementById("riddle-hint");

const messageDisplay = document.getElementById("riddle-message");
const nextButton = document.getElementById("riddle-next-button");

const gameSection = document.getElementById("riddle-game");
const resultSection = document.getElementById("riddle-result");

const finalScoreDisplay = document.getElementById("riddle-final-score");
const finalMessageDisplay = document.getElementById("riddle-final-message");
const playAgainButton = document.getElementById("riddle-play-again");


// =================================
// QUESTION BANK
// =================================

const riddleBank = {

    easy: [
        {
            category: "Number Logic",
            question: "What number comes next: 2, 4, 6, 8, ?",
            options: ["9", "10", "12", "14"],
            answer: "10",
            hint: "Each number increases by 2."
        },
        {
            category: "General Logic",
            question: "Which month has 28 days?",
            options: ["February", "January", "All months", "June"],
            answer: "All months",
            hint: "Think about the minimum number of days in every month."
        },
        {
            category: "Number Logic",
            question: "What number comes next: 5, 10, 15, 20, ?",
            options: ["22", "25", "30", "35"],
            answer: "25",
            hint: "Add the same number each time."
        },
        {
            category: "Thinking",
            question: "A farmer has 10 sheep. All but 3 run away. How many remain?",
            options: ["3", "7", "10", "0"],
            answer: "3",
            hint: "All but 3 means all except 3."
        },
        {
            category: "Number Logic",
            question: "What is half of 100 plus 10?",
            options: ["55", "60", "50", "40"],
            answer: "60",
            hint: "Find half of 100 first."
        },
        {
            category: "General Logic",
            question: "Which is heavier: 1 kg of iron or 1 kg of cotton?",
            options: ["Iron", "Cotton", "Both equal", "Cannot say"],
            answer: "Both equal",
            hint: "Look at their weights, not their sizes."
        },
        {
            category: "Number Logic",
            question: "What comes next: 1, 3, 5, 7, ?",
            options: ["8", "9", "10", "11"],
            answer: "9",
            hint: "These are consecutive odd numbers."
        },
        {
            category: "Thinking",
            question: "If you have 3 apples and take away 2, how many do you have?",
            options: ["1", "2", "3", "5"],
            answer: "2",
            hint: "The question asks how many you took."
        },
        {
            category: "General Logic",
            question: "What has hands but cannot clap?",
            options: ["Robot", "Clock", "Person", "Monkey"],
            answer: "Clock",
            hint: "It helps you tell the time."
        },
        {
            category: "Number Logic",
            question: "What is the next number: 10, 20, 30, 40, ?",
            options: ["45", "50", "55", "60"],
            answer: "50",
            hint: "Add 10 each time."
        },
        {
            category: "Thinking",
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            answer: "3",
            hint: "It is a three-sided shape."
        },
        {
            category: "General Logic",
            question: "What gets wetter as it dries?",
            options: ["Soap", "Towel", "Sun", "Paper"],
            answer: "Towel",
            hint: "You use it after a bath."
        },
        {
            category: "Number Logic",
            question: "What is 12 divided by 3?",
            options: ["3", "4", "6", "9"],
            answer: "4",
            hint: "How many groups of 3 fit into 12?"
        },
        {
            category: "Thinking",
            question: "Which word becomes shorter when you add two letters to it?",
            options: ["Small", "Short", "Tiny", "Little"],
            answer: "Short",
            hint: "Add E and R to the word."
        },
        {
            category: "General Logic",
            question: "What has a face and two hands but no arms or legs?",
            options: ["Clock", "Doll", "Statue", "Mirror"],
            answer: "Clock",
            hint: "It tells you the time."
        },
        {
            category: "Number Logic",
            question: "What number is missing: 4, 8, 12, ?, 20",
            options: ["14", "15", "16", "18"],
            answer: "16",
            hint: "The numbers increase by 4."
        },
        {
            category: "Thinking",
            question: "If today is Monday, what day will it be after 3 days?",
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            answer: "Thursday",
            hint: "Count Tuesday as the first day."
        },
        {
            category: "General Logic",
            question: "What has a neck but no head?",
            options: ["Bottle", "Chair", "Table", "Book"],
            answer: "Bottle",
            hint: "You can pour water from it."
        },
        {
            category: "Number Logic",
            question: "What comes next: 100, 90, 80, 70, ?",
            options: ["65", "60", "55", "50"],
            answer: "60",
            hint: "Subtract 10 each time."
        },
        {
            category: "Thinking",
            question: "How many corners does a rectangle have?",
            options: ["2", "3", "4", "6"],
            answer: "4",
            hint: "Count its four vertices."
        }
    ],

    medium: [
        {
            category: "Number Logic",
            question: "What comes next: 2, 6, 12, 20, 30, ?",
            options: ["36", "40", "42", "44"],
            answer: "42",
            hint: "The differences are 4, 6, 8 and 10."
        },
        {
            category: "Number Logic",
            question: "Find the missing number: 1, 4, 9, 16, ?",
            options: ["20", "24", "25", "36"],
            answer: "25",
            hint: "These are square numbers."
        },
        {
            category: "Logical Thinking",
            question: "A clock shows 3:00. What is the angle between its hands?",
            options: ["45 degrees", "90 degrees", "120 degrees", "180 degrees"],
            answer: "90 degrees",
            hint: "The hands point in perpendicular directions."
        },
        {
            category: "Number Logic",
            question: "If 5 machines make 5 items in 5 minutes, how long do 10 machines take to make 10 items?",
            options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
            answer: "5 minutes",
            hint: "Each machine makes one item in 5 minutes."
        },
        {
            category: "Logical Thinking",
            question: "A number is doubled and then 6 is added. The result is 20. What is the number?",
            options: ["5", "6", "7", "8"],
            answer: "7",
            hint: "Work backwards from 20."
        },
        {
            category: "Number Logic",
            question: "What comes next: 3, 9, 27, 81, ?",
            options: ["162", "189", "243", "324"],
            answer: "243",
            hint: "Multiply by 3 each time."
        },
        {
            category: "Logical Thinking",
            question: "A father is 40 years old and his son is 10. How many years until the father is twice the son's age?",
            options: ["10", "15", "20", "25"],
            answer: "20",
            hint: "Set up: 40 + x = 2(10 + x)."
        },
        {
            category: "Number Logic",
            question: "Find the missing number: 2, 3, 5, 8, 13, ?",
            options: ["18", "20", "21", "23"],
            answer: "21",
            hint: "Add the previous two numbers."
        },
        {
            category: "Logical Thinking",
            question: "If all roses are flowers and some flowers fade quickly, can we conclude all roses fade quickly?",
            options: ["Yes", "No", "Always", "Only sometimes"],
            answer: "No",
            hint: "Some flowers does not mean all flowers."
        },
        {
            category: "Number Logic",
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: "2",
            hint: "A prime number has exactly two positive factors."
        },
        {
            category: "Logical Thinking",
            question: "You overtake the person in second place in a race. What position are you in?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Second",
            hint: "You take the position of the person you passed."
        },
        {
            category: "Number Logic",
            question: "What comes next: 1, 8, 27, 64, ?",
            options: ["100", "125", "144", "216"],
            answer: "125",
            hint: "These are cubes of consecutive integers."
        },
        {
            category: "Logical Thinking",
            question: "A box contains 3 red and 3 blue balls. What is the minimum number you must pick without looking to guarantee two of the same colour?",
            options: ["2", "3", "4", "5"],
            answer: "3",
            hint: "Consider the worst case for the first two picks."
        },
        {
            category: "Number Logic",
            question: "If 4 workers complete a job in 6 days, how many days would 8 equally fast workers take?",
            options: ["2", "3", "4", "6"],
            answer: "3",
            hint: "Twice the workers means half the time."
        },
        {
            category: "Logical Thinking",
            question: "A book has 100 pages. How many digits are needed to number its pages from 1 to 100?",
            options: ["189", "190", "192", "200"],
            answer: "192",
            hint: "Count one-digit, two-digit and three-digit page numbers separately."
        },
        {
            category: "Number Logic",
            question: "What is the next number: 7, 14, 28, 56, ?",
            options: ["84", "98", "112", "120"],
            answer: "112",
            hint: "Each number is doubled."
        },
        {
            category: "Logical Thinking",
            question: "If yesterday was two days before Friday, what day is today?",
            options: ["Wednesday", "Thursday", "Friday", "Saturday"],
            answer: "Thursday",
            hint: "Two days before Friday is Wednesday."
        },
        {
            category: "Number Logic",
            question: "What is the missing number: 11, 22, 44, 88, ?",
            options: ["132", "144", "166", "176"],
            answer: "176",
            hint: "Multiply by 2."
        },
        {
            category: "Logical Thinking",
            question: "A train travels 60 km in one hour. How far does it travel in 30 minutes at the same speed?",
            options: ["15 km", "20 km", "30 km", "40 km"],
            answer: "30 km",
            hint: "Thirty minutes is half an hour."
        },
        {
            category: "Number Logic",
            question: "What is the next number: 1, 2, 6, 24, 120, ?",
            options: ["240", "360", "600", "720"],
            answer: "720",
            hint: "Multiply by 2, then 3, then 4, then 5."
        }
    ],

    hard: [
        {
            category: "Number Logic",
            question: "Find the next number: 2, 3, 5, 9, 17, 33, ?",
            options: ["49", "57", "65", "67"],
            answer: "65",
            hint: "The differences double each time."
        },
        {
            category: "Logical Thinking",
            question: "Three boxes are labelled Apples, Oranges and Mixed. All labels are wrong. What is the minimum number of fruits you must pick to correctly label all boxes?",
            options: ["1", "2", "3", "4"],
            answer: "1",
            hint: "Pick from the box labelled Mixed."
        },
        {
            category: "Number Logic",
            question: "What comes next: 1, 2, 6, 15, 31, 56, ?",
            options: ["82", "90", "92", "96"],
            answer: "92",
            hint: "The differences are 1, 4, 9, 16 and 25."
        },
        {
            category: "Logical Thinking",
            question: "You have 8 identical-looking balls, but one is heavier. What is the minimum number of balance-scale weighings needed to guarantee finding it?",
            options: ["1", "2", "3", "4"],
            answer: "2",
            hint: "Divide the balls into groups of three, three and two."
        },
        {
            category: "Number Logic",
            question: "Find the missing number: 2, 5, 10, 17, 26, ?",
            options: ["35", "36", "37", "38"],
            answer: "37",
            hint: "Look at the differences between consecutive terms."
        },
        {
            category: "Logical Thinking",
            question: "A farmer must cross a river with a fox, a chicken and grain. The boat carries the farmer and only one item. What must be taken across first?",
            options: ["Fox", "Chicken", "Grain", "Any item"],
            answer: "Chicken",
            hint: "The fox cannot be left alone with the chicken."
        },
        {
            category: "Number Logic",
            question: "What comes next: 4, 9, 19, 39, 79, ?",
            options: ["119", "139", "159", "169"],
            answer: "159",
            hint: "Multiply by 2 and add 1."
        },
        {
            category: "Logical Thinking",
            question: "There are 5 people in a room. Each person shakes hands with every other person exactly once. How many handshakes occur?",
            options: ["5", "10", "15", "20"],
            answer: "10",
            hint: "Count unique pairs of people."
        },
        {
            category: "Number Logic",
            question: "What is the next number: 1, 4, 13, 40, 121, ?",
            options: ["242", "363", "364", "484"],
            answer: "364",
            hint: "Multiply by 3 and add 1."
        },
        {
            category: "Logical Thinking",
            question: "A two-digit number has digits that add to 9. Reversing the digits makes the number 27 smaller. What is the original number?",
            options: ["36", "45", "54", "63"],
            answer: "63",
            hint: "The tens digit is 3 greater than the units digit."
        },
        {
            category: "Number Logic",
            question: "What comes next: 2, 12, 36, 80, 150, ?",
            options: ["216", "240", "252", "270"],
            answer: "252",
            hint: "Each term is n squared multiplied by n plus 1."
        },
        {
            category: "Logical Thinking",
            question: "A snail climbs 3 metres during the day and slips 2 metres at night. How many days does it take to climb out of a 10-metre well?",
            options: ["7", "8", "9", "10"],
            answer: "8",
            hint: "On the final day, it does not slide back."
        },
        {
            category: "Number Logic",
            question: "What is the next number: 3, 8, 15, 24, 35, ?",
            options: ["46", "48", "50", "52"],
            answer: "48",
            hint: "The differences are consecutive even numbers."
        },
        {
            category: "Logical Thinking",
            question: "A family has two parents and six sons. Each son has one sister. How many people are in the family?",
            options: ["8", "9", "14", "16"],
            answer: "9",
            hint: "The sons all share the same sister."
        },
        {
            category: "Number Logic",
            question: "Find the next number: 5, 11, 23, 47, 95, ?",
            options: ["180", "189", "191", "195"],
            answer: "191",
            hint: "Multiply by 2 and add 1."
        },
        {
            category: "Logical Thinking",
            question: "A drawer contains 10 black and 10 white socks. In complete darkness, what is the minimum number of socks to pick to guarantee a matching pair?",
            options: ["2", "3", "10", "11"],
            answer: "3",
            hint: "There are only two possible colours."
        },
        {
            category: "Number Logic",
            question: "What comes next: 1, 5, 14, 30, 55, ?",
            options: ["81", "91", "95", "105"],
            answer: "91",
            hint: "The differences are 4, 9, 16 and 25."
        },
        {
            category: "Logical Thinking",
            question: "A clock takes 5 seconds to strike 6 times. How long does it take to strike 12 times at the same rate?",
            options: ["10 seconds", "11 seconds", "12 seconds", "15 seconds"],
            answer: "11 seconds",
            hint: "Six strikes have five intervals."
        },
        {
            category: "Number Logic",
            question: "Find the missing number: 2, 6, 18, 54, ?",
            options: ["108", "126", "162", "216"],
            answer: "162",
            hint: "Multiply by 3."
        },
        {
            category: "Logical Thinking",
            question: "A person looks at a photograph and says: 'I have no brothers or sisters, but this person's father is my father's son.' Who is in the photograph?",
            options: ["Their father", "Their child", "Their cousin", "Their uncle"],
            answer: "Their child",
            hint: "Since the speaker has no siblings, their father's son is the speaker."
        }
    ]
};


// =================================
// GAME VARIABLES
// =================================

let selectedQuestions = [];
let currentQuestionIndex = 0;

let score = 0;
let correctAnswers = 0;

let hintUsed = false;
let questionAnswered = false;
let gameFinished = false;

let elapsedSeconds = 0;
let timerInterval = null;

const TOTAL_QUESTIONS = 10;


// =================================
// SHUFFLE QUESTIONS
// =================================

function shuffleRiddles(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// =================================
// TIMER
// =================================

function formatRiddleTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}

function startRiddleTimer() {
    if (timerInterval !== null) return;

    timerInterval = setInterval(function () {
        elapsedSeconds++;

        timerDisplay.textContent =
            formatRiddleTime(elapsedSeconds);

    }, 1000);
}

function stopRiddleTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}


// =================================
// UPDATE STATISTICS
// =================================

function updateRiddleStats() {
    scoreDisplay.textContent = score;

    correctDisplay.textContent = correctAnswers;

    progressDisplay.textContent =
        Math.min(currentQuestionIndex + 1, TOTAL_QUESTIONS) +
        " / " + TOTAL_QUESTIONS;
}


// =================================
// DISPLAY QUESTION
// =================================

function displayRiddle() {

    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        finishRiddleGame();
        return;
    }

    const current = selectedQuestions[currentQuestionIndex];

    questionAnswered = false;
    hintUsed = false;

    categoryDisplay.textContent = current.category;
    questionDisplay.textContent = current.question;

    optionsContainer.innerHTML = "";

    hintDisplay.hidden = true;
    hintDisplay.textContent = "";

    hintButton.disabled = false;
    hintButton.textContent = "Show Hint";

    nextButton.hidden = true;

    messageDisplay.textContent = "Choose the correct answer!";

    current.options.forEach(function (option) {

        const button = document.createElement("button");

        button.className = "riddle-option";
        button.textContent = option;

        button.addEventListener("click", function () {
            checkRiddleAnswer(option, button);
        });

        optionsContainer.appendChild(button);
    });

    updateRiddleStats();
}


// =================================
// CHECK ANSWER
// =================================

function checkRiddleAnswer(selectedAnswer, selectedButton) {

    if (questionAnswered || gameFinished) return;

    startRiddleTimer();

    questionAnswered = true;

    const current = selectedQuestions[currentQuestionIndex];

    const optionButtons =
        optionsContainer.querySelectorAll(".riddle-option");

    optionButtons.forEach(function (button) {
        button.disabled = true;

        if (button.textContent === current.answer) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === current.answer) {

        correctAnswers++;

        const points = hintUsed ? 8 : 10;

        score += points;

        messageDisplay.textContent =
            "Correct! You earned " + points + " points.";

    } else {

        selectedButton.classList.add("wrong");

        messageDisplay.textContent =
            "Incorrect! The correct answer is: " +
            current.answer;
    }

    hintButton.disabled = true;

    updateRiddleStats();

    nextButton.hidden = false;

    nextButton.textContent =
        currentQuestionIndex === TOTAL_QUESTIONS - 1
            ? "See Results"
            : "Next Question";
}


// =================================
// SHOW HINT
// =================================

function showRiddleHint() {

    if (questionAnswered || gameFinished || hintUsed) return;

    startRiddleTimer();

    hintUsed = true;

    hintDisplay.textContent =
        "Hint: " +
        selectedQuestions[currentQuestionIndex].hint;

    hintDisplay.hidden = false;

    hintButton.textContent = "Hint Used";
    hintButton.disabled = true;
}


// =================================
// NEXT QUESTION
// =================================

function nextRiddleQuestion() {

    if (!questionAnswered || gameFinished) return;

    currentQuestionIndex++;

    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        finishRiddleGame();
    } else {
        displayRiddle();
    }
}


// =================================
// FINISH GAME
// =================================

function finishRiddleGame() {

    gameFinished = true;

    stopRiddleTimer();

    gameSection.hidden = true;
    resultSection.hidden = false;

    progressDisplay.textContent =
        TOTAL_QUESTIONS + " / " + TOTAL_QUESTIONS;

    finalScoreDisplay.textContent =
        "Your Score: " + score + " / " + (TOTAL_QUESTIONS * 10);

    finalMessageDisplay.textContent =
        "You answered " + correctAnswers +
        " out of " + TOTAL_QUESTIONS +
        " riddles correctly in " +
        formatRiddleTime(elapsedSeconds) + ".";

}


// =================================
// START NEW GAME
// =================================

function startRiddleGame() {

    stopRiddleTimer();

    const difficulty = difficultySelect.value;

    const questionBank = riddleBank[difficulty];

    selectedQuestions = shuffleRiddles(questionBank)
        .slice(0, TOTAL_QUESTIONS);

    currentQuestionIndex = 0;

    score = 0;
    correctAnswers = 0;

    elapsedSeconds = 0;

    hintUsed = false;
    questionAnswered = false;
    gameFinished = false;

    timerDisplay.textContent = "00:00";

    gameSection.hidden = false;
    resultSection.hidden = true;

    displayRiddle();
}


// =================================
// EVENT LISTENERS
// =================================

newGameButton.addEventListener("click", startRiddleGame);

playAgainButton.addEventListener("click", startRiddleGame);

nextButton.addEventListener("click", nextRiddleQuestion);

hintButton.addEventListener("click", showRiddleHint);

difficultySelect.addEventListener("change", startRiddleGame);


// =================================
// START GAME
// =================================

startRiddleGame();

