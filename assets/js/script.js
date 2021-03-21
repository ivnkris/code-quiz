const startButton = document.getElementById("start-button");
const startContainer = document.getElementById("start-container");

const removeStartContainer = () => {
  console.log("Remove START container");
};

const startGame = () => {
  //remove original game content
  removeStartContainer();
  //present first question

  //start the timer
};

//on click of the start button, run the startGame function
startButton.addEventListener("click", startGame);
