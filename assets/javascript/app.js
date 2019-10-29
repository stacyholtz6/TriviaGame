
var gameTimer;
var correct = 0;
var incorrect = 0;
var counter = 15;
var triviaArea = $("#tivia-area");


//array of objects for each question, answer and photo 
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



$("#trivia-area").hide();
$("#score-area").hide();

$("#submit").on("click", function () {
  $("#score-area").show();
  $("#trivia-area").hide();
  $("#timer-area").hide();
  $("#timer").hide();
  $("#submit").hide();
})

$("#start-btn").on("click", function () {
  $("#start-btn").hide();
  $("#trivia-area").show();
})

startGame();
function countDown() {
  counter--;
  $("#timer").html(counter);
  if (counter === 0) {
    console.log("out of time");
    submitAnswers();
    completed();
  }
};

function startGame() {
  gameTimer = setInterval(countDown, 1000)
  for (var i = 0; i < questions.length; i++) {
    triviaArea.text("<h2>" + questions[i].question + "</h2");
    for (var j = 0; j < questions[i].answers.length; j++) {
      triviaArea.text("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        console.log('questions',questions);

    }
  }
}

function submitAnswers() {
  var inputs = triviaArea.children("input:checked");
  for (var i = 0; i < inputs.length; i++) {
    if ($(inputs[i]).val() === questions[i].correctAnswer) {
      correct++;
      console.log('correct',correct);
    } else {
      incorrect++;
      console.log('incorrect',incorrect);
    }
  }
  completed();
};

function completed() {
  clearInterval(gameTimer);
  triviaArea.text("Done!!");
  triviaArea.text("Correct Answers: " + correct);
  triviaArea.text("Incorrect Answers: " + incorrect);
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



