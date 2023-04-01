var questionList = document.querySelector("questions");

function questions() {
    questionList.innerHTML = "Test";

    var li = document.createElement("li");
    li.textContent = Test;

    questionList.appendChild(li);
}