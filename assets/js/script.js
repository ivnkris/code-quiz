const startButton = document.getElementById("start-button");
const startContainer = document.getElementById("start-container");
const mainElement = document.querySelector("main");

const removeStartContainer = () => {
  startContainer.remove();
};

const presentQuestion = () => {
  //create new HTML elements and set attributes
  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question-container");
  const questionHeader = document.createElement("h1");
  const questionButton1 = document.createElement("button");
  questionButton1.setAttribute("id", "button-1");
  const questionButton2 = document.createElement("button");
  questionButton1.setAttribute("id", "button-2");
  const questionButton3 = document.createElement("button");
  questionButton1.setAttribute("id", "button-3");
  const questionButton4 = document.createElement("button");
  questionButton1.setAttribute("id", "button-4");

  //set element text content
  questionHeader.textContent = "Question 1";
  questionButton1.textContent = "Button 1";
  questionButton2.textContent = "Button 2";
  questionButton3.textContent = "Button 3";
  questionButton4.textContent = "Button 4";

  //append children onto DOM tree
  mainElement.appendChild(questionDiv);
  questionDiv.appendChild(questionHeader);
  questionDiv.appendChild(questionButton1);
  questionDiv.appendChild(questionButton2);
  questionDiv.appendChild(questionButton3);
  questionDiv.appendChild(questionButton4);
};

const startTimer = () => {
  console.log("start timer");
};

const startGame = () => {
  //remove original game content
  removeStartContainer();

  //present first question
  presentQuestion();

  //start the timer
  startTimer();
};

//on click of the start button, run the startGame function
startButton.addEventListener("click", startGame);
