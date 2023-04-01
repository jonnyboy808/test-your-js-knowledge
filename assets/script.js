var timeDisplay = document.querySelector("#timeDisplay")
var timer = document.querySelector("starter");

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
})


var questionList = document.querySelector("#questions");

function questions() {
    questionList.innerHTML = "Test";

    var li = document.createElement("li");
    li.textContent = Test;

    questionList.appendChild(li);
}