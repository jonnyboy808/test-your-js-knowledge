
var questionList = [
    {
    ask:"To check if two variables are equal in an if statment you wold use the ____ symble",
    choices: ["=", "#", "==", "!"],
    answer: "=="
},
{
    ask: "The first index of an array is____.",
    choices: ["1", "First", "0", "Auto"],
    answer: "0"
},
{
    ask:"What can we use to display text when an image doesn't load in the web browser",
    choices: ["scr=", "text=", "discription=", "alt="],
    answer: "alt="
},
{
    ask:"What can be useful to use when trying to debug?",
    choices: ["console log", "terminal", "gitHub", "google"],
    answer: "console log"
},
{
    ask:"Within our HTML file, how would we call for a js file to be linked",
    choices: ["link rel='script.js'", "script src='script'.js", "href='script.js'", "All of the above" ],
    answer: "script src='script'.js"
},
];


var timeDisplay = document.querySelector("#timeDisplay");
var timer = document.querySelector("#starter");
var card = document.querySelector ("#card");
var listCreate = document.createElement("ul");

// variables for timer
var timeHolder = 0;
var startingPoint = 60;
var wrongPenalty = 10;
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
    } 
    display(questionOptions);
});

function display(questionOptions) {
    card.innerHTML = "";
    listCreate.innerHTML = "";
    for (var i = 0; i < questionList.length; i++) {
        var userQuestion = questionList[questionOptions].ask;
        var userOptions = questionList[questionOptions].choices;
        card.textContent = userQuestion;
    }

    userOptions.forEach(function (line) {
        var listOptions = document.createElement("li");
        listOptions.textContent = line;
        card.appendChild(listCreate);
        listCreate.appendChild(listOptions);
        listOptions.addEventListener("click", (compare));
    })
}


// function for when the quiz comes to an end and to display scores
function end() {
    card.innerHTML = '';
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
    textBox.textContent = "Type your initials: ";
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
        var totalScore = {
            initials: initials,
            score: timeRemaining
            }
            var previousScores = localStorage.getItem("previousScores");
            if (previousScores ===  null) {
                previousScores = [];
            } else {
                previousScores = JSON.parse(previousScores);
            }
            previousScores.push(totalScore);
            var newScore = JSON.stringify(previousScores);
            localStorage.setItem("previousScores", newScore);
            window.location.replace("./scores.html");
        });
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
            addDiv.textContent = "Sorry, The correct answer was: " + questionList[questionOptions].answers;
        }
    }

    questionOptions++;
    if (questionOptions >= questionList.length) {
        end();
        addDiv.textContent = "Total of " + score + " out of " + questionList.length + " correct.";
    } else {
        display(questionOptions);
    }
    card.appendChild(addDiv);
}

