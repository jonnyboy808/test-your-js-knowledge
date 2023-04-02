var timeDisplay = document.querySelector("#timeDisplay");
var timer = document.querySelector("#starter");
var card = document.querySelector ("card");
var createList = document.createElement("ul");

// variables for timer
var timeHolder = 0;
var startingPoint = 2;
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
                end();
                timeDisplay.textContent = "Sorry but time is up";
            }
        }, 1000);
    } display(questionOptions)
});

function display(questionOptions) {
    card.innerHTML = "";
    createList.innerHTML = "";
    for (var i = 0; i < questionList.length; i++) {
        var userQuestion = question[questionOptions].ask;
        var userOptions = question[questionOptions].choices;
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
    end();
    addDiv.textContent = "Quiz has concluded" + " " + "You got " + score + "/" + questionList.length + "correct.";
} else {
    display(questionOptions);
} card.appendChild(addDiv);
}


// function for when the quiz comes to an end and to display scores
function end() {
    card.innerHTML = "";
    timeDisplay.innerHTML = "Finished!";
// header for end of quiz
    var addH2 = document.createElement("h2");
    addH2.setAttribute("id", "addH2");
    addH2.textContent = "The Quiz has came to an end"
    card.appendChild(addH2);

    var addP = document.createElement("p");
    addP.setAttribute("id", "addP");
    card.appendChild(addP);

    if (startingPoint >=0) {
        var timeRemaining = startingPoint;
        var addP2 = document.createElement("p");
        clearInterval(timeHolder);
        addP.textContent = "Your final score is: " + timeRemaining;
        card.appendChild(addP2);
    }

    var textBox = document.createElement("label");
    textBox.setAttribute("id", "textBox");
    textBox,textContent = "Type your initials: ";
    card.appendChild(textBox);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
    card.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
    card.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {
            console.log("No Value");
        } else {
            var totalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(totalScore);
            var previousScores = localStorage.getItem("previousScore");
            if (previousScores ===  null) {
                previousScores = [];
            } else {
                previousScores = JSON.parse(previousScores);
            }
            previousScores.push(totalScore);
            var newScore = JSON.stringify(previousScores);
            localStorage.setItem("previousScores", newScore);
            window.location.replace("./")
        }
    })



} 




var questionList = {
    ask:"This is only a Test",
    choices: ["taco", "meat", "pizza"],
    answer: "pizza"

}
