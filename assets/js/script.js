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
        question: "Which contextual class is used to create an orange text color?",
        choices: [".text-warning", ".txt-warning", ".bg-warning", ".txt-orange"],
        correctAnswer: ".text-warning"
    },
    {
        question: "The Bootstrap grid system is based on how many columns?",
        choices: ["12", "3", "9", "6"],
        correctAnswer: "12"
    },
    {
        question: "Which class adds zebra-stripes to a table?",
        choices: [".table-zebra", ".table-bordered", ".table-striped", ".even and .odd"],
        correctAnswer: ".table-striped"
    },
    {
        question: "Which class shapes an image to a circle?",
        choices: [".rounded-circle", ".img-circle", ".img-round", ".img-rounded"],
        correctAnswer: ".rounded-circle"
    },
    {
        question: "Which button class is used to create a large button?",
        choices: [".btn-lg", "btn-l", "btn-xl", "btn-large"],
        correctAnswer: ".btn-lg"
    },
    {
        question: "Which class is used to create a badge?",
        choices: [".badge-label", ".badge", ".badge-item", ".label-badge"],
        correctAnswer: ".badge"
    },
    {
        question: "Which class adds a heading to a card?",
        choices: [".card-head", ".card-heading", ".card-header", ".card-footer"],
        correctAnswer: ".card-header"
    },
    {
        question: "Which class indicates uppercased text?",
        choices: [".text-uppercase", ".uppercase", ".text-capitalize", ".ucase"],
        correctAnswer: ".text-uppercase"
    },
    {
        question: "A standard navigation bar is created with:",
        choices: ['<nav class="nav navbar">', '<nav class="navbar navbar-default">', '<nav class="navbar navbar-expand-sm">', '<nav class="navigationbar navbar-default">'],
        correctAnswer: '<nav class="navbar navbar-expand-sm">'
    },
    {
        question: "Which component is used to cycle through elements, like a slideshow?",
        choices: ["Slideshow", "Orbit", "Scrollspy", "Carousel"],
        correctAnswer: "Carousel"
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