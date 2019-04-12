var player1 = new Player("Anna");
var player2 = new Player("Mariia");
var player1Turn = true;
var playingAgainstComputerEasy = false;
// var playingAgainstComputerHard = false;
var randomNumber;
var score = 0;




function Player(name) {
  this.name = name,
    this.score = 0
}
//
function easyGame() {
  roll();
  roll();
  alert("Computers score is  " + score);
  passTurn();
}
// //
// function hardGame(){
//   if(score>=10){
// passTurn();
//   } else if (score <=1){
//     hardGame();
//   }
// }



function roll() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    score = 0;
    passTurn();
  } else {
    score += randomNumber;
  }
}

function passTurn() {
  if (player1Turn) {
    player1.score += score;
    player1Turn = !player1Turn;
    winner();
    score = 0;
    $("#current-player").text($("input#username1").val());
    $("#current-player").show($("input#username1").val());
    $(".current-player").show();
    $("#player1-area").text(player1.score);
    $("#player1-area").show();
    if (playingAgainstComputerEasy) {
      easyGame();
    }

    // } else if (playingAgainstComputerHard){
    //   hardGame();

  } else {
    player1Turn = !player1Turn;
    player2.score += score;
    winner();
    score = 0;
    $("#current-player").text($("input#username2").val());
    $("#current-player").show($("input#username2").val());
    $(".current-player").show();

    $("#player2-area").text(player2.score);
    $("#player2-area").show();
  }



};

function winner() {
  if (player1.score > 100) {
    $("#image1").attr("src", "img/winner.jpg");
    $("#pig-dice").slideUp();
  } else if (player2.score > 100) {
    $("#image1").attr("src", "img/winner.jpg");
    $("#pig-dice").slideUp();
  }
}

$(document).ready(function() {
  $("#roll-button").click(function() {
    roll();


    $("#image").attr("src", "img/" + randomNumber + ".png");


  });
  $("#pass-turn").click(function() {
    passTurn();

  });
  $("#play").click(function(event) {
    event.preventDefault();
    $(".names").slideUp();
    $("#pig-dice").slideDown();
    var name1 = $("input#username1").val();
    var name2 = $("input#username2").val();
    $("#player-one").text(name1);
    $("#player-one").show(name1);
    $("#player-two").text(name2);
    $("#player-two").show(name2);

  });
  $("#easy").click(function() {
    playingAgainstComputerEasy = true;

    $(".levels").slideUp();
    $("#pig-dice").slideDown();
  });
  // // //
  // $("#hard").click(function() {
  //   playingAgainstComputerHard = true;
  //   $(".levels").slideUp();
  //   $("#pig-dice").slideDown();
  // });

  $("#vs-computer").click(function() {
    $(".levels").slideDown();
    $(".comp-vs-human").slideUp();
  });

  $("#vs-humans").click(function() {
    $(".names").slideDown();
    $(".comp-vs-human").slideUp();
  });

});