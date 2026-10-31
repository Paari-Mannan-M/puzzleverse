
// ===================================
// GENERAL KNOWLEDGE QUIZ
// ===================================

// Question Bank
const questions = [

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
    },

    {
        question: "Who invented the telephone?",
        options: [
            "Thomas Edison",
            "Alexander Graham Bell",
            "Isaac Newton",
            "Albert Einstein"
        ],
        answer: 1
    },

    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: 2
    },

    {
        question: "Which language is used to structure web pages?",
        options: ["CSS", "JavaScript", "Python", "HTML"],
        answer: 3
    },

    {
        question: "How many sides does a hexagon have?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: 1
    },

    {
        question: "Which is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2
    },

    {
        question: "What is the chemical symbol for Gold?",
        options: ["Ag", "Au", "Fe", "Go"],
        answer: 1
    },

    {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },

    {
        question: "How many bits are there in one byte?",
        options: ["4", "8", "16", "32"],
        answer: 1
    },

    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Hydrogen"
        ],
        answer: 2
    }

];


// ===================================
// GAME VARIABLES
// ===================================

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;


// ===================================
// HTML ELEMENTS
// ===================================

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const timerDisplay = document.getElementById("timer");
const questionText = document.getElementById("question-text");

const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");


// ===================================
// START QUIZ
// ===================================

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    welcomeScreen.hidden = true;
    resultScreen.hidden = true;
    quizScreen.hidden = false;

    showQuestion();

}


// ===================================
// DISPLAY QUESTION
// ===================================

function showQuestion() {

    clearInterval(timerInterval);

    answered = false;
    timeLeft = 15;

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    questionText.textContent = question.question;

    timerDisplay.textContent = `Time: ${timeLeft}s`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";

    feedback.textContent = "";
    nextButton.hidden = true;

    question.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener("click", function() {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);

    });

    startTimer();

}


// ===================================
// TIMER
// ===================================

function startTimer() {

    timerInterval = setInterval(function() {

        timeLeft--;

        timerDisplay.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            feedback.textContent = "Time's up!";

            showCorrectAnswer();

            answered = true;
            nextButton.hidden = false;

        }

    }, 1000);

}


// ===================================
// SELECT ANSWER
// ===================================

function selectAnswer(selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    clearInterval(timerInterval);

    const correctIndex = questions[currentQuestion].answer;

    const optionButtons =
        optionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach(function(button, index) {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

    });

    if (selectedIndex === correctIndex) {

        score++;

        feedback.textContent = "Correct Answer!";

    }
    else {

        optionButtons[selectedIndex].classList.add("incorrect");

        feedback.textContent = "Incorrect! Try the next one.";

    }

    nextButton.hidden = false;

}


// ===================================
// SHOW CORRECT ANSWER
// ===================================

function showCorrectAnswer() {

    const correctIndex = questions[currentQuestion].answer;

    const optionButtons =
        optionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach(function(button, index) {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

    });

}


// ===================================
// NEXT QUESTION
// ===================================

function nextQuestion() {

    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    }
    else {

        showResults();

    }

}


// ===================================
// FINAL RESULTS
// ===================================

function showResults() {

    clearInterval(timerInterval);

    quizScreen.hidden = true;
    resultScreen.hidden = false;

    finalScore.textContent =
        `Your Score: ${score} / ${questions.length}`;

    if (score === 10) {

        resultMessage.textContent =
            "Excellent! Perfect Score!";

    }
    else if (score >= 7) {

        resultMessage.textContent =
            "Great Job! You have good knowledge.";

    }
    else if (score >= 4) {

        resultMessage.textContent =
            "Good effort! Keep learning.";

    }
    else {

        resultMessage.textContent =
            "Keep practising! You can improve.";

    }

}


// ===================================
// RESTART QUIZ
// ===================================

function restartQuiz() {

    startQuiz();

}


// ===================================
// BUTTON EVENTS
// ===================================

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartQuiz);

