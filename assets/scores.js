var topScore = document.querySelector("#topScore");
var homepage = document.querySelector("#return");
var clear = document.querySelector("#clear");


clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// pulls from local storage to display content
var previousScores = localStorage.getItem("previousScores");
previousScores = JSON.parse(previousScores);

if (previousScores !== null) {
    for (var i = 0; i < previousScores.length; i++) {
        var createList = document.createElement("li");
        createList.textContent = previousScores[i].initials + " " + previousScores[i].score;
        topScore.appendChild(createList);
    }
}
// adds listener to go back to the start page
homepage.addEventListener("click", function() {
    window.location.replace("./index.html");
});