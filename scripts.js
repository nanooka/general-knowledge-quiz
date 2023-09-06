const startButton = document.querySelector(".start");
const container = document.querySelector(".container");
const options = document.querySelector(".options");
const h2 = container.querySelector("h2");
const nextBtn = document.querySelector(".next");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let pointCounter = 0;
let selectedAnswers = 0;
let numberOfQuestions = 10;

const answerButtons = document.querySelectorAll(".answer-buttons");

const questionsArray = [
  {
    question: "what is capital of France?",
    answers: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "who is known as the queen of pop?",
    answers: ["Beyonce", "Madonna", "Whitney Houston", "Diana Ross"],
    correctAnswer: "Madonna",
  },
  {
    question: "Who is the richest female singer?",
    answers: ["Beyonce", "Rihanna", "Lady gaga", "Doja cat"],
    correctAnswer: "Rihanna",
  },
  {
    question: "Which is the largest planet in the solar system?",
    answers: ["Jupiter", "Earth", "Saturn", "Mars"],
    correctAnswer: "Jupiter",
  },
  {
    question: "How many teeth does an adult human have?",
    answers: [28, 30, 26, 32],
    correctAnswer: 32,
  },
  {
    question: "Which member of the Beatles married Yoko Ono?",
    answers: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
    correctAnswer: "John Lennon",
  },
  {
    question: "How many hearts does an octopus have?",
    answers: [1, 2, 3, 8],
    correctAnswer: 3,
  },
  {
    question: "How many legs does a spider have?",
    answers: [4, 8, 6, 10],
    correctAnswer: 8,
  },
  {
    question: "Who has the most beautiful smile for all the time?",
    answers: [
      "whitney houston",
      "Brad Pitt",
      "Julia Roberts",
      "Michael Jackson",
    ],
    correctAnswer: "Michael Jackson",
  },
  {
    question: 'Who played the character of Jack Dawson in the movie "Titanic"?',
    answers: [
      "Leonardo Dicaprio",
      "Tom Cruise",
      "Cillian Murphy",
      "Ryan Gosling",
    ],
    correctAnswer: "Leonardo Dicaprio",
  },
  {
    question: "what is the national sport of Japan?",
    answers: ["Football", "Chess", "Karate", "Sumo"],
    correctAnswer: "Sumo",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      "George Orwell",
      "Charles Dickens",
      "william shakespeare",
      "Ernest Hemingway",
    ],
    correctAnswer: "william shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["H₂O", "H₂CO₃", "O₂", "CH₂O."],
    correctAnswer: "H₂O",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Salvador Dalí",
      "Leonardo da Vinci",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which company produces the iPhone?",
    answers: ["Microsoft", "Apple", "Samsung Electronics", "Amazon"],
    correctAnswer: "Apple",
  },
  {
    question: "Who is the lead vocalist of the rock band Queen?",
    answers: ["Mike Grose", "Barry Mitchell", "John Deacon", "Freddie Mercury"],
    correctAnswer: "Freddie Mercury",
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      "James Madison",
      "George Washington",
      "Franklin Pierce",
      "Abraham Lincoln",
    ],
    correctAnswer: "George Washington",
  },
  {
    question: "Which the largest desert in the world?",
    answers: [
      "Sahara Desert",
      "Antarctic Polar Desert",
      "Arabian Desert",
      "Gobi Desert",
    ],
    correctAnswer: "Antarctic Polar Desert",
  },
  {
    question: "What is the boiling point of water in Ceslius?",
    answers: ["100°C", "50°C", "212°C", "150°C"],
    correctAnswer: "100°C",
  },
  {
    question: "What is the highest mountain in the world?",
    answers: ["Mount Olympus", "Mount Everest", "Mount Kilimanjaro", "Denali"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "How many kilometers are in a metre?",
    answers: [1000, 0.01, 0.001, 100],
    correctAnswer: 0.001,
  },
  {
    question: "What is the most-watched sporting event in the world?",
    answers: [
      "UEFA Super Cup",
      "UEFA Champions League",
      "FIFA World Cup",
      "The Super Bowl",
    ],
    correctAnswer: "The Super Bowl",
  },
  {
    question: 'Who wrote the novel "1984"?',
    answers: [
      "George Orwell",
      "Franz Kafka",
      "F. Scott Fitzgerald",
      "Mark Twain",
    ],
    correctAnswer: "George Orwell",
  },
  {
    question: 'Which African country is known as the "Rainbow Nation"?',
    answers: ["South Africa", "Nigeria", "Ethiopia", "Egypt"],
    correctAnswer: "South Africa",
  },
  {
    question: "What is the longest river?",
    answers: ["Nile", "Amazon River", "Congo River", "Mississippi River"],
    correctAnswer: "Nile",
  },
  {
    question:
      'Who played the character Katniss Everdeen in "The Hunger Games" movie series?',
    answers: ["Emma Stone", "Zendaya", "Jennifer Lawrence", "Keira Knightley"],
    correctAnswer: "Jennifer Lawrence",
  },
  {
    question: "What is the value of π (pi) rounded to two decimal places?",
    answers: [3.14, 2.66, 0, 1],
    correctAnswer: 3.14,
  },
  {
    question: "Solve the equation: 3x - 7 = 20.",
    answers: [3, 7, 9, 20],
    correctAnswer: 9,
  },
  {
    question: "Calculate 25% of 80.",
    answers: [25, 20, 10, 40],
    correctAnswer: 20,
  },
  {
    question: "Which is the largest country in the world",
    answers: ["Russia", "Canada", "USA", "China"],
    correctAnswer: "Russia",
  },
  {
    question: "In which country can you find the Great Wall?",
    answers: ["Indonesia", "Germany", "China", "USA"],
    correctAnswer: "China",
  },
  {
    question: "What is the national animal of Australia?",
    answers: ["Giraffe", "Kangaroo", "Elephant", "Rhinoceros"],
    correctAnswer: "Kangaroo",
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: ["Mercury", "Saturn", "Mars", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Polar bear", "Hippopotamus", "Asian elephant", "the blue whale"],
    correctAnswer: "the blue whale",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["Japan", "China", "Philippines", "USA"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      "The Atlantic Ocean",
      "The Pacific Ocean",
      "The Indian Ocean",
      "The Southern Ocean",
    ],
    correctAnswer: "The Pacific Ocean",
  },
  {
    question: "What date is the National Freedom Day of America",
    answers: ["March 21", "February 1", "November 18", "June 15"],
    correctAnswer: "February 1",
  },
  {
    question: "What is the national bird of the United States?",
    answers: ["Swan", "Raven", "Owl", "The bald eagle"],
    correctAnswer: "The bald eagle",
  },
  {
    question:
      "Who is the creator of the theory of evolution by natural selection?",
    answers: [
      "Charles Darwin",
      "Isaac Newton",
      "Albert Einstein",
      "Gregor Mendel",
    ],
    correctAnswer: "Charles Darwin",
  },
  {
    question: "What is the national animal of India?",
    answers: ["Elephant", "Horse", "Cow", "Tiger"],
    correctAnswer: "Tiger",
  },
];

let chosenQuestions = [];

let selected = false;
let array = chosenQuestions;

//choose numberOfQuestions different questions from general questions array
function randomQuestionsFunction() {
  while (chosenQuestions.length < numberOfQuestions) {
    const randomQuestion =
      questionsArray[Math.floor(Math.random() * questionsArray.length)];

    if (!chosenQuestions.includes(randomQuestion)) {
      chosenQuestions.push(randomQuestion);
    }
  }
}

const randomQuestion =
  chosenQuestions[Math.floor(Math.random() * chosenQuestions.length)];

const generateQuestionsAndAnswers = (array, index) => {
  h2.textContent = array[index].question;
  for (let i = 0; i < array[index].answers.length; i++) {
    answerButtons[i].innerText = array[index].answers[i];
  }
};

//main function
function start() {
  startButton.classList.add("hidden");
  j = 0;
  pointCounter = 0;
  selectedAnswers = 0;
  randomQuestionsFunction();
  generateQuestionsAndAnswers(chosenQuestions, j);
  container.classList.remove("hidden");
  container.classList.add("visible");
  nextBtn.classList.remove("hidden");
  nextBtn.classList.add("visible");

  console.log(chosenQuestions);
}

const handleAnswerClick = (e) => {
  e.preventDefault();
  selected = true;

  // if any answer is clicked, it is imposible to choose another one
  answerButtons.forEach((button) => {
    button.classList.add("cursor");
    button.removeEventListener("click", handleAnswerClick);
  });

  if (e.target.innerText == array[j].correctAnswer) {
    console.log(true);
    e.target.classList.add("correct");
    pointCounter++;
    selectedAnswers++;
  } else {
    console.log(false);
    e.target.classList.add("incorrect");
    selectedAnswers++;
  }
};

// Add event listeners to answer buttons using handleAnswerClick
answerButtons.forEach((element) => {
  element.addEventListener("click", handleAnswerClick);
});

//next

nextBtn.addEventListener("click", (e) => {
  console.log(selectedAnswers);
  e.preventDefault();
  answerButtons.forEach((element) => {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
    element.classList.remove("cursor");
    element.addEventListener("click", handleAnswerClick);
  });

  if (selected) {
    array.splice(j, 1);
    console.log(array);
    if (j > 0) {
      j = j;
    } else {
      j = 0;
    }
  } else {
    j++;
    if (array.length == 2) {
      j = 0;
    }
  }

  if (j < array.length) {
    generateQuestionsAndAnswers(array, j);
  }
  //if it's last question and there are questions that aren't answered, ask again
  if (
    (j == array.length - 1 && selectedAnswers < numberOfQuestions) ||
    (!selected && array.length == 1)
  ) {
    j = 0;
  }
  //finish
  if (array.length == 0) {
    container.classList.add("hidden");
    nextBtn.classList.add("hidden");
    result.classList.remove("hidden");
    result.classList.add("visible");
    restart.classList.remove("hidden");
    restart.classList.add("visible");
    result.textContent = pointCounter + "/" + numberOfQuestions;
    console.log(pointCounter + "/" + numberOfQuestions);
  }
  selected = false;
});

//restart quiz
restart.addEventListener("click", (e) => {
  e.preventDefault();
  selected = false;
  result.classList.add("hidden");
  restart.classList.add("hidden");
  randomQuestionsFunction();
  start();
});
