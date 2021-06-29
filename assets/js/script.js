var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-button");
var questionPage = document.querySelector("#question-page");
var endPage = document.querySelector("#end-page");
var initialButton = document.querySelector("initial-button");

var questions = [
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "What?",
        choices: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
]

questionPage.style.display = 'none';
endPage.style.display = 'none';


startButton.addEventListener('click', function () {
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
});





