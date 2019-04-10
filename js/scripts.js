
var player1 = new Player ("Anna");
var player2 = new Player ("Mariia");
var player1Turn = true;
var randomNumber;
var score = 0;

function Player (name) {
  this.name = name,
  this.score = 0
}


function roll() {
  randomNumber = Math.floor(Math.random() *6) +1;
  console.log(randomNumber);
  if (randomNumber === 1){
    score = 0;
    passTurn();
  }
  else {
    score += randomNumber; //This adds up the score
  }
}

function passTurn () {
  if (player1Turn) {
    player1.score += score; //This adds the die score to the Player's constructor score
    player1Turn =! player1Turn; //Saying this is "not" Player1's turn, so "true" turns to "false"
    winner();
    alert("Player2, it's your turn!");
  }
  else {
  player1Turn =! player1Turn; //signifies player2turn (player1Turn = "false")
    player2.score += score;
    winner();
    alert("Player1, it's your turn!");
  }
};

function winner() {
  if (player1.score > 100) {
    alert("Player1, you are the winner!")
  }
  else if (player2.score > 100) {
    alert("Player2, you are the winner!")
  }
}

$(document).ready(function() {
  $("#roll-button").click(function() {
    roll(); //the functon that runs once the Roll button is clicked
  });
  $("#pass-turn").click(function() {
    passTurn(); //the function that runs once the Pass-turn button is clicked
  });
});
