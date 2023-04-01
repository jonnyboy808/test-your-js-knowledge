var timeDisplay = document.querySelector("#timeDisplay");
var timer = document.querySelector("#starter");
var card = document.querySelector ("card");
var createList = document.createElement("ul");

// variables for timer
var timeHolder = 0;
var startingPoint = 60;
var wrongPenalty = 5;
var score = 0;
var questionOptions = 0;

// trigger for timer to appear and begin countdown
timer.addEventListener("click", function () {
    if (timeHolder === 0) {
        timeHolder = setInterval (function () {
            startingPoint--;
            timeDisplay.textContent = "Remaining Time: " + startingPoint;
            if (startingPoint <= 0) {
                clearInterval(timeHolder);
                complete();
                timeDisplay.textContent = "Sorry but time is up";
            }
        }, 1000);
    } display(questionOptions)
});

function display(questionOptions) {
    card.innerHTML = "";
    createList.innerHTML = "";
    for (var i = 0; i < questionList.length; i++) {
        var userQuestion = question[questionOptions].heading;
        var userOptions = question[questionOptions].options;
        card.textContent = userQuestion
    }

    userOptions.forEach(function (line) {
        var listOptions = document.createElement("li");
        listOptions.textContent = line;
        card.appendChild(listCreate);
        listCreate.appendChild(listOptions);
        listOptions.addEventListener("click", (compare));
    })
}


function compare(event) {
    var choices = event.target;
    if (choices.matches("li")) {
        var addDiv = document.createElement("div");
        addDiv.setAttribute("id", "addDiv");

        if (choices.textContent == questionList[questionOptions].answer) {
            score++;
            addDiv.textContent = "Correct! The answer was: " + questionList[questionOptions].answer;
        } else {
            startingPoint = startingPoint - wrongPenalty;
            addDiv.textContent = "Sorry but the correct answer was: " + question[questionOptions].answer;
    }
}



questionOptions++;

if (questionOptions >= questionList.length) {
    complete();
    addDiv.textContent = "Quiz has concluded" + " " + "You got " + score + "/" + questionList.length + "correct.";
} else {
    display(questionOptions);
} card.appendChild(addDiv);
}


var card = document.querySelector("#card");
var question =  {
    Title: "Test",
    Options: ["Test-1", "Test-2"],
    Answer: "Test-2"
    };
