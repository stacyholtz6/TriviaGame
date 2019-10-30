var gameTimer;
var correct = 0;
var incorrect = 0;
var counter = 20;
var triviaArea = $("#trivia-area");
var submitBtn = $("#submit");
var scoreArea = $("#score-area");

var clockRunning = false;

//array of objects for each question and answer
var questions = [
  {
    question: "Top grossing movie of all time?",
    answers: ["Avatar", "Titanic", "Avengers End Game", "Ironman 3"],
    correctAnswer: "Titanic"

  },
  {
    question: "'You can't handle the truth' is from what movie?",
    answers: ["JFK", "A Few Good Men", "To Kill a Mockingbird", "Clear and Present Danger"],
    correctAnswer: "A Few Good Men"
  },
  {
    question: "What was the nick name of the mechanical shark in Jaws",
    answers: ["Bob", "Tom", "Clyde", "Bruce"],
    correctAnswer: "Bruce"
  },
  {
    question: "Whats the name of the hotel that's off limits to conduct business in John Wick",
    answers: ["The Continental", "The Plaza", "Holiday Inn Express", "The Ritz Carlton"],
    correctAnswer: "The Continental"
  }
];

$(document).ready(function () {

  console.log(' submitBtn', submitBtn);

  $("#trivia-area").hide();
  $("#score-area").hide();

  $("#submit").on("click", function () {
    submitAnswers();
    console.log("helllooooooo");
    $("#score-area").show();
    $("#trivia-area").hide();
    $("#timer-area").hide();
    $("#timer").hide();
    $("#submit").hide();

  });

  $("#start-btn").on("click", function () {
    startTimer();
    $("#start-btn").hide();
    $("#trivia-area").show();
  });


  // starts time on click - but doesn't stop
  // $("#start-btn").on("click", startTimer);

  setQuestions();

});

function countDown() {
  counter--;
  $("#timer").html(counter);
  if (counter === 0) {
    clearInterval(gameTimer);
    console.log("out of time");
    alert("Sorry out of time, Game Over");
  }
};


function startTimer() {
  if (!clockRunning) {
    gameTimer = setInterval(countDown, 1000)
    clockRunning = true;
  }
};

// doesn't show questions with the options to select them
function setQuestions() {
  for (var i = 0; i < questions.length; i++) {
    triviaArea.append("<h2>" + questions[i].question + "</h2");
    for (var j = 0; j < questions[i].answers.length; j++) {
      triviaArea.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      console.log('questions', questions);

    }
  }
}

function submitAnswers() {
  clearInterval(gameTimer);
  var inputs = triviaArea.children("input:checked");
  console.log('inputs', inputs);
  for (var i = 0; i < inputs.length; i++) {
    console.log('inputs[i].val()', inputs[i].value);
    console.log(' questions[i].correctAnswer', questions[i].correctAnswer);
    if (inputs[i].value === questions[i].correctAnswer) {
      correct++;
      console.log('correct', correct);
    } else {
      incorrect++;
      console.log('incorrect', incorrect);
    }
  }
  completed();
};

function completed() {
  scoreArea.append("Done!!");
  scoreArea.append("Correct Answers: " + correct);
  scoreArea.append("Incorrect Answers: " + incorrect);
}

// var gradeQuiz = $("#submitQuiz").on("click", function() {
//   var correctAnswers = 0;
//      var incorrectAnswers = 0;
//      for (var i = 0; i < 10; i++) {
//          if ($('input: + questions[i].name').val() === questions[i].correct) {
//              correctAnswers++;
//          } //end if statement
//          else {
//              incorrectAnswers++;
//          };  //end else statement
//      };  //end for loop



