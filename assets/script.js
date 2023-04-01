var timeDisplay = document.querySelector("#timeDisplay")
var timer = document.querySelector("starter");

var listCreate = document.createElement("ul");

// variables for timer
var timeHolder = 0;
var startingPoint = 60;
var wrongPenalty = 5;

var score = 0;
var questionOptions = 0;

// trigger for timer to appear and begin countdown
timer.addEventListener("click", function () {
    if (timeHolder === 0) {
        timeHolder = setTime (function () {
            startingPoint--;
            timeDisplay.textContent = "Remaining Time: " + startingPoint;
            if (startingPoint <= 0) {
                clearInterval(timeHolder);
                allDone();
                timeDisplay.textContent = "Sorry but time is up";
            }
        }, 1000);
    }
});

function render(questionOptions) {
    card.innerHTML = "";
    listCreate.innerHTML = "";
    for (var i = 0; i < question.length; i++) {
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




var card = document.querySelector("#card");
var question =  {
    Title: "Test",
    Options: ["Test-1", "Test-2"],
    Answer: "Test-2"
    };
