var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
$("#submit").hide();
$(document).ready(function () {




  var myQuestions = [
    {
      question:
        "The Homolographic projection has the correct representation of",
      answers: {
        a: "shape",
        b: "area",
        c: "baring",
        d: "distance"
      },
      correctAnswer: "b"
    },
    {
      question: "The great Victoria Desert is located in",
      answers: {
        a: "Canada",
        b: "West Africa",
        c: "Australia",
        d: "North America"
      },
      correctAnswer: "c"
    },
    {
      question:
        "The group of minerals chemically containing hydrocarbons is",
      answers: {
        a: "silicate group",
        b: "organic group",
        c: "oxide group",
        d: "hydride group"
      },
      correctAnswer: "c"
    },
    {
      question:
        "	The minor planets revolving between the orbits of Jupiter and Mars are called",
      answers: {
        a: "Novas",
        b: "Comets",
        c: "Meteors",
        d: "Asteroids"
      },
      correctAnswer: "d"
    },
    {
      question: "The longest ship canal in the world is the",
      answers: {
        a: "St. Laurence Seaway",
        b: "Suez canal",
        c: "Kiel canal",
        d: "Panama canal"
      },
      correctAnswer: "d"
    },
    {
      question:
        "The longest river in the Common wealth of independent states is the",
      answers: {
        a: "Irtysh river",
        b: "Ob river",
        c: "Yenisei river",
        d: "Volga river"
      },
      correctAnswer: "d"
    },

    {
      question: "Which of the following is an inland sea?",
      answers: {
        a: "Caribbean sea",
        b: "Caspian sea",
        c: "Red sea",
        d: "Yellow sea"
      },
      correctAnswer: "b"
    },

    {
      question: "The most densely populated country of Africa is",
      answers: {
        a: "Mauritius",
        b: "Rwanda",
        c: "Burundi",
        d: "Sierra Leone"
      },
      correctAnswer: "a"
    }
  ];

  // myQuestions.forEach((currentQuestion, questionNumber) => {
  //   for (letter in currentQuestion.answers) {
  //     console.log(letter);
  //   }
  // });

  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      //we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        answers.push(
          '<label>' +
          '<input type="radio" name="question' + questionNumber + '"' + 'value="' + letter + '">'
          + letter + " : " + currentQuestion.answers[letter]
          + '<label>'
          // `<label>
          //      <input type="radio" name="question${questionNumber}" value="${letter}">
          //      ${letter} : ${currentQuestion.answers[letter]}
          //   </label>`
        );

      }


      output.push(
        '<div class="question">' + currentQuestion.question + '</div>' +
        '<div class="answers">' + answers.join("") + '</div>'

      );
    });

    document.getElementById("quizchoice").innerHTML =
      '<span style="text-align:left" >' + output.join(" ") + '</span>' + "<br/>";
  }

  function showResults() {

    var answerContainers = quizContainer.querySelectorAll('.answers');
    console.log(answerContainers);

    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unAnswered = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answerContainer = answerContainers[questionNumber];
      var selector = 'input[name=question' + questionNumber + ']:checked';
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        correctAnswer++;
      }
      else if (userAnswer == null) {
        unAnswered++;
      }
      else {
        wrongAnswer++;
      }
    });
    quizContainer.innerHTML = '<span style="font-size:40px; font-weight:bold" >All done !</span>' + "<br/>" + "Correct Answers :" + correctAnswer + "<br/>" +
      "Wrong Answers : " + wrongAnswer + "<br/>" + "unAnswered :" + unAnswered;
  }
  document.getElementById("startButton").onclick = function () {
    $(this).hide();
    startTimer();
    buildQuiz();
    $("#submit").show();
  };

  var i = 30;

  function startTimer() {
    document.getElementById("time").innerHTML = "Time Remaining : " + i;
    var countdownTimer = setInterval(function () {
      console.log(i);
      i = i - 1;
      document.getElementById("time").innerHTML = "Time Remaining : " + i;

      if (i === -1) {
        showResults();
      }
      if (i < 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);


  }

  submitButton.addEventListener("click", showResults);

});