var timeDisplay = document.querySelector("#timeDisplay")
var timer = document.querySelector("starter");

// variables for timer
var timeHolder = 0;
var startingPoint = 60;
var wrongPenalty = 5;


// trigger for timer to appear and begin countdown
timer.addEventListener("click", function () {
    if (timeHolder === 0) {
        timeHolder = setTime (function () {
            startingPoint--;
            timeDisplay.textContent = "Remaining Time: " + startingPoint;
            if (startingPoint <= 0) {
                clearInterval(timeHolder);
                timeDisplay.textContent = "Sorry but time is up";
            }
        }, 1000);
    }
});

function render(questionOptions) {
    card.innerHTML = "";
    for (var i = 0; i < question.length; i++) {
        var userQuestion = question[questionOptions].heading;
        var userOptions = question[questionOptions].options;
        card.textContent = userQuestion
    }

    userQuestion.forEach(function (line) {
        var listOptions = document.createElement("li");
        listOptions.textContent = line;
        card.addEventListener("click", (compare));
    })
}

var question =  {
    Title: "Test",
    Options: ["Test-1", "Test-2"],
    Answer: "Test-2"
    };


var questionList = document.querySelector("#questions");

function questions() {
    questionList.innerHTML = "Test";

    var li = document.createElement("li");
    li.textContent = Test;

    questionList.appendChild(li);
}