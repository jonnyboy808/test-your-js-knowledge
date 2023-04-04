var score = document.querySelector("#topscores");
var clear = document.querySelector("#clear");
var homepage = document.querySelector("#return");

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var totalScores = localStorage.getItem("totalScores");
totalScores = JSON.parse(totalScores);

if (totalScores !== null) {
    for (var i = 0; i < totalScores.length; i++) {
        var createList = document.createElement("li");
        createList.textContent =totalScores[i].initials + " " + totalScores[i].score;
        topscores.appendChild(createList);
    }
}
homepage.addEventListener("click", function(){
    window.location.replace(" index.html");
});