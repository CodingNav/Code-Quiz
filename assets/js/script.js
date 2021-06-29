var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-button");
var questionPage = document.querySelector("#question-page");
var endPage = document.querySelector("#end-page");
var initialButton = document.querySelector("initial-button");

questionPage.style.display = 'none';
endPage.style.display = 'none';


startButton.addEventListener('click', function() { 
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
});