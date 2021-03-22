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
};

showHighScores();

const clearHighScores = () => {
  highscoresContainer.children[0].remove();
};

clearHighScoresButton.addEventListener("click", clearHighScores);
