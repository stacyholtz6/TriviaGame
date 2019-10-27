$(document).ready(function () {

  // need the triva content
  // need a timer
  // need a gif for each correct/incorrect answer
  // basically making a slide show
  // need a game reset
  // need a wins/losses tracker
  // need the slides to change after each guess and the timer to reset
  // want to be able to ask the user a question and track their answer


  // Tracking variables
  var wins = 0;
  var losses = 0;
  var correctGuess = 0;
  var incorrectGuess = 0;

  // timer variables - reset with every question
  var questionTime = 10;
  var count = 0;

  var questionText = $("#question");
  var answerAText = $("#answerA");
  var answerBText = $("#answerB");
  var answerCText = $("#answerC");
  var correctText = $("#correct");
  var wrongText = $("#wrong");
  var imageText = $("#questionImage");
  var timerText = $("#timer");

  // need an array of objects for each question and asnwers
  var questions = [
    {
      question: "What is the most ordered food in the U.S.",
      // img: 
      answerA: "Fried Chicken",
      answerB: "Pizza",
      answerC: "Cheeseburgers",
      correctAnswer: "A"
    },
    {
      question: "In which State was Coca-Cola first sold",
      // img: 
      answerA: "Alabama",
      answerB: "Georgia",
      answerC: "New York",
      correctAnswer: "B"
    },
    {
      question: "Official State pie of Florida",
      // img: 
      answerA: "Peach Pie",
      answerB: "Key Lime Pie",
      answerC: "Cherry Pie",
      correctAnswer: "B"
    },
    {
      question: "Which American food item is rumored to survive a nuclear attack",
      // img: 
      answerA: "Zingers",
      answerB: "Swiss Rolls",
      answerC: "Twinkies",
      correctAnswer: "C"
    },
    {
      question: "Official State fruit of Utah",
      // img: 
      answerA: "Cherries",
      answerB: "Apples",
      answerC: "Peaches",
      correctAnswer: "A"
    }

  ];














})