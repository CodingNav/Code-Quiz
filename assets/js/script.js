var timeElement = document.querySelector("#time-element");
var timeDisplay = document.querySelector("#time");

var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-button");

var questionPage = document.querySelector("#question-page");
var questionDisplay = document.querySelector("#question");
var choicesDisplay = document.querySelector("#choices");
var feedbackDisplay = document.querySelector("#feedback");


var endPage = document.querySelector("#end-page");
var scoreDisplay = document.querySelector("#score");
var userInitials = document.querySelector("#initials");
var initialSubmit = document.querySelector("#initial-submit");

var highscorePage = document.querySelector("#highscore-page");
var viewHighscore = document.querySelector("#view-highscore");
var highscoreTable = document.querySelector("#highscore-table");
var clearButton = document.querySelector("#clear-button");
var mainButton = document.querySelector("#main-button");

var timer;
var currentQuestion = 0;
var currentTime = 75; 

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
];

var highscoreBoard = [];

highscorePage.style.display = 'none';
questionPage.style.display = 'none';
endPage.style.display = 'none';


startButton.addEventListener('click', function () {
    loadQuestion();
    startPage.style.display = 'none';
    viewHighscore.style.display = 'none';
    questionPage.style.display = 'block';

    timeDisplay.textContent = currentTime;

    timer = setInterval(function () {
        currentTime--;
       
        if(currentTime <= 0) {
            questionPage.style.display = 'none';
            endPage.style.display = 'block';
            clearInterval(timer);
            currentTime = 0;
            scoreDisplay.textContent = currentTime;
        }
        
        timeDisplay.textContent = currentTime;
    }, 1000)
});


function loadQuestion() {
    questionDisplay.textContent = questions[currentQuestion].question;
    choicesDisplay.innerHTML = "";

    for (i = 0; i < questions[currentQuestion].choices.length; i++) {
        var listItem = document.createElement("li");
        choicesDisplay.appendChild(listItem);
        listItem.textContent = questions[currentQuestion].choices[i];
    }
}

choicesDisplay.addEventListener('click', function (event) {
    // console.log('click');
    // if (feedbackDisplay.textContent != "") {
    //     return;
    // }
    var userChoice = event.target;
    if (userChoice.textContent === questions[currentQuestion].correctAnswer) {
        feedbackDisplay.textContent = "Correct!";
    }
    else {
        feedbackDisplay.textContent = "Wrong";
        currentTime -= 10; 
    }

    setTimeout(function () {
        feedbackDisplay.textContent = "";
        currentQuestion++;

        if (currentQuestion == questions.length) {
            questionPage.style.display = 'none';
            endPage.style.display = 'block';
            clearInterval(timer);
            scoreDisplay.textContent = currentTime;
        }
        else {
            loadQuestion();
        }
    }, 1000)
});


viewHighscore.addEventListener('click', function () {
    highscorePage.style.display = 'block';
    viewHighscore.style.display = 'none';
    timeElement.style.display = 'none';
    startPage.style.display = 'none';
    endPage.style.display = 'none';
});

mainButton.addEventListener('click', function(){
    highscorePage.style.display = 'none';
    viewHighscore.style.display = 'block';
    startPage.style.display = 'block';
});


