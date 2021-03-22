const clearHighScoresButton = document.getElementById("clear-highscores");

//show highscores on highscores page
const showHighScores = () => {
  const highscoresContainer = document.getElementById("highscores-container");

  const highscoresDiv = document.createElement("div");

  const highscoreName = localStorage.getItem("initials");
  const highscoreScore = localStorage.getItem("score");

  if (highscoreScore !== null) {
    highscoresDiv.textContent = `The current highscore holder is ${highscoreName}, with a score of ${highscoreScore}!`;
  }
  highscoresContainer.appendChild(highscoresDiv);
  highscoresDiv.setAttribute("id", "highscores-div");
};

showHighScores();

//clears local storage when "clear highscores" button is clicked
const clearHighScores = () => {
  document.getElementById("highscores-div").remove();
  localStorage.clear();
};

clearHighScoresButton.addEventListener("click", clearHighScores);
