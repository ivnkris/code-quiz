const startButton = document.getElementById("start-button");
const startContainer = document.getElementById("start-container");
const mainElement = document.querySelector("main");
const timerElement = document.getElementById("timer-element");

//questions database
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

//question tracker default value
let questionTracker = 1;

//default score
let score = 0;

//removes the content of the container displayed before starting the game
const removeStartContainer = () => {
  startContainer.remove();
};

//renders the questions on the user's screen
const presentQuestions = () => {
  const questionSelector = `question${questionTracker}`;
  console.log(questionSelector);

  const timeOutCallback = () => {
    questionTracker += 1;
    console.log(questionTracker);
    mainElement.children[0].remove();
    presentQuestions();
  };

  const answerLogic = (event) => {
    console.log(event);
    const targetId = event.target.id;
    console.log(event.target.id);
    console.log(typeof targetId);

    if (targetId === questionsObject[questionSelector].correctAnswer) {
      const correctButton = document.getElementById(
        questionsObject[questionSelector].correctAnswer
      );
      correctButton.style.backgroundColor = "lightgreen";
    } else {
      const correctButton = document.getElementById(
        questionsObject[questionSelector].correctAnswer
      );
      correctButton.style.backgroundColor = "lightgreen";

      const incorrectButton = document.getElementById(targetId);
      incorrectButton.style.backgroundColor = "lightcoral";

      timer -= 10;
    }
    const answerTimer = setTimeout(timeOutCallback, 1000);
  };

  if (questionTracker <= 5) {
    //create new HTML elements and set attributes
    const questionDiv = document.createElement("div");
    questionDiv.setAttribute("class", "question-container");
    const questionHeader = document.createElement("h1");
    const questionButton1 = document.createElement("button");
    const questionButton2 = document.createElement("button");
    const questionButton3 = document.createElement("button");
    const questionButton4 = document.createElement("button");

    //set element text content
    questionHeader.textContent = questionsObject[questionSelector].question;
    questionButton1.textContent = questionsObject[questionSelector].answer1;
    questionButton2.textContent = questionsObject[questionSelector].answer2;
    questionButton3.textContent = questionsObject[questionSelector].answer3;
    questionButton4.textContent = questionsObject[questionSelector].answer4;

    //append children onto DOM tree
    mainElement.appendChild(questionDiv);
    questionDiv.appendChild(questionHeader);
    questionDiv.appendChild(questionButton1);
    questionButton1.setAttribute("id", "button-1");
    questionDiv.appendChild(questionButton2);
    questionButton2.setAttribute("id", "button-2");
    questionDiv.appendChild(questionButton3);
    questionButton3.setAttribute("id", "button-3");
    questionDiv.appendChild(questionButton4);
    questionButton4.setAttribute("id", "button-4");

    //event listener to create answer logic
    questionButton1.addEventListener("click", answerLogic);
    questionButton2.addEventListener("click", answerLogic);
    questionButton3.addEventListener("click", answerLogic);
    questionButton4.addEventListener("click", answerLogic);
  }
};

//ends the game and presents the score
const gameOver = () => {
  alert("BOOM");
  console.log(score);
};

//controls the game's timer
const startTimer = () => {
  const timerCallback = () => {
    if (timer > 0) {
      timer -= 1;
    }

    timerElement.textContent = timer;

    if (timer === 0 || questionTracker > 5) {
      score = timer;
      clearInterval(timerInterval);
      gameOver();
    }
  };

  const timerInterval = setInterval(timerCallback, 1000);
};

//the main game function, runs when the user clicks the "Start Quiz" button
const startGame = () => {
  //remove original game content
  removeStartContainer();

  //present questions
  presentQuestions();

  //start the timer
  timerElement.textContent = timer;
  startTimer();
};

//on click of the start button, run the startGame function
startButton.addEventListener("click", startGame);
