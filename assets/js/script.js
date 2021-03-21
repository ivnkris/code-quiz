const startButton = document.getElementById("start-button");
const startContainer = document.getElementById("start-container");
const mainElement = document.querySelector("main");
const timerElement = document.getElementById("timer-element");

const questionsObject = {
  question1: {
    question:
      "Inside which HTML element do we put the <script> tag to link JavaScript?",
    answer1: "<head>",
    answer2: "<header>",
    answer3: "<html>",
    answer4: "<body>",
    correctAnswer: "button-4",
  },
  question2: {
    question: "What is the correct syntax to target all <h4> elements?",
    answer1: 'const h4Elements = document.querySelector("h4")',
    answer2: 'const h4Elements = window.querySelector("h4")',
    answer3: 'const h4Elements = document.querySelectorAll("h4")',
    answer4: 'const h4Elements = document.getElementById("h4)',
    correctAnswer: "button-3",
  },
  question3: {
    question: "What isn't a JavaScript event?",
    answer1: "onrender",
    answer2: "onclick",
    answer3: "onkeyup",
    answer4: "onfocus",
    correctAnswer: "button-1",
  },
  question4: {
    question: "What is the correct syntax to declare an ES6 function?",
    answer1: "const myFunction = function () => {}",
    answer2: "const myFunction = () => {}",
    answer3: "const myFunction => () {}",
    answer4: "var myFunction = () => {}",
    correctAnswer: "button-2",
  },
  question5: {
    question: "What other name is JavaScript known by?",
    answer1: "NetscapeScript",
    answer2: "MozillaScript",
    answer3: "DOMScript",
    answer4: "ECMAScript",
    correctAnswer: "button-4",
  },
};

//timer default value
let timer = 60;

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

const gameOver = () => {
  alert("BOOM");
};

const startTimer = () => {
  const timerCallback = () => {
    if (timer > 0) {
      timer -= 1;
    } else {
      clearInterval(timerInterval);
      gameOver();
    }
    timerElement.textContent = timer;
  };

  const timerInterval = setInterval(timerCallback, 1000);
};

const startGame = () => {
  //remove original game content
  removeStartContainer();

  //present first question
  presentQuestion();

  //start the timer
  timerElement.textContent = timer;
  startTimer();
};

//on click of the start button, run the startGame function
startButton.addEventListener("click", startGame);
