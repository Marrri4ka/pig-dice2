var player1 = new Player("Anna");
var player2 = new Player("Mariia");
var player1Turn = true;
var randomNumber;
var score = 0;




function Player(name) {
  this.name = name,
    this.score = 0
}

function easyGame(){
roll();
roll();
alert("Computers score is  " + score);
passTurn();
alert("Playert it is your turn");

}


function roll() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    score = 0;
    passTurn();
  } else {
    score += randomNumber; //This adds up the score
  }
}

function passTurn() {
  if (player1Turn) {
    player1.score += score; //This adds the die score to the Player's constructor score
    player1Turn = !player1Turn; //Saying this is "not" Player1's turn, so "true" turns to "false"
    winner();
    score=0;
    $("#current-player").text($("input#username1").val());
    $("#current-player").show($("input#username1").val());
    $(".current-player").show();
  } else {
    player1Turn = !player1Turn; //signifies player2turn (player1Turn = "false")
    player2.score += score;
    winner();
      score=0;
    $("#current-player").text($("input#username2").val());
    $("#current-player").show($("input#username2").val());
    $(".current-player").show();
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
    // easyGame(); //the functon that runs once the Roll button is clicked

    $("#image").attr("src", "img/" + randomNumber + ".png");


  });
  $("#pass-turn").click(function() {
    passTurn(); //the function that runs once the Pass-turn button is clicked
    $("#player1-area").text(player1.score);
    $("#player1-area").show();

    $("#player2-area").text(player2.score);
    $("#player2-area").show();
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
    $(".levels").slideUp();
    $("#pig-dice").slideDown();

  });

  $ ("#vs-computer").click(function(){
    $(".levels").slideDown();
    $(".comp-vs-human").slideUp();
  });

  $ ("#vs-humans").click(function(){
    $(".names").slideDown();
    $(".comp-vs-human").slideUp();
  });

});
