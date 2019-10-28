$(document).ready(function () {
  var currentQuestion = 0;
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unanswered;
  var seconds;
  var time;
  var answered;
  var userGuess;

  var startButton = $("#start-btn");




  //array of objects for each question, answer and photo 
  var triviaGame = [
    {
      question: "Top grossing movie of all time?",
      answers: ["Avatar", "Titanic", "Avengers End Game", "Ironman 3"],
      correct: 2,
      photo: "assets/images/avengers.jpeg"
    },
    {
      question: "'You can't handle the truth' is from what movie?",
      answers: ["JFK", "A Few Good Men", "To Kill a Mockingbird", "Clear and Present Danger"],
      correct: 1,
      photo: "assets/images/aFewGoodMen.jpeg"
    },
    {
      question: "What was the nick name of the mechanical shark in Jaws",
      answers: ["Bob", "Tom", "Clyde", "Bruce"],
      correct: 3,
      photo: "assets/images/jaws.jpeg"
    },
    {
      question: "Whats the name of the hotel that's off limits to conduct business in John Wick",
      answers: ["The Continental", "The Plaza", "Holiday Inn Express", "The Ritz Carlton"],
      correct: 0,
      photo: "assets/images/johnWick.jpeg"
    }
  ];

  $(".trivia-area").hide();
  $("#reset-btn").hide();

  startButton.on("click", function () {
    startButton.hide();
    $(".trivia-area").show();
    showQuestion();
  });


  // start game when start button is clicked. 



  // functions that are needed to run game

  // start game - use start btn
  function startGame() {
    // hide start button once its clicked
    // show question container once start button is clicked
    // should call next question
    // nextQuestion()
    // start timer??

  };

  function showQuestion() {
    // this gets us the first question from the array
    var selectedQuestion = triviaGame[currentQuestion];
    $("#question").text(selectedQuestion.question);
    for (var i = 0; i < selectedQuestion.answers.length; i++) {
      // this gives each li and index number 
      $("#options").append("<li id='" + i + "'>" + selectedQuestion.answers[i] + "</li>")
    }
    console.log('selectedQuestion', selectedQuestion);
  }


  function checkAnswer() {

  }









})