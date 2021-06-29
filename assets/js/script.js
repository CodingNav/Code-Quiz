var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-button");

var questionPage = document.querySelector("#question-page");
var questionDisplay = document.querySelector("#question");
var choicesDisplay = document.querySelector("#choices");
var feedbackDisplay = document.querySelector("#feedback");

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


questionDisplay.textContent = questions[0].question;

for (i=0; i < questions[0].choices.length; i++) {
    var listItem = document.createElement("li");
    choicesDisplay.appendChild(listItem);
    listItem.textContent = questions[0].choices[i];
}


choicesDisplay.addEventListener('click', function(event) {
    var userChoice = event.target;
    if (userChoice.textContent === questions[0].correctAnswer) {
        feedbackDisplay.textContent = "Correct!";
    }
    else {
        feedbackDisplay.textContent = "Wrong";
    }
});