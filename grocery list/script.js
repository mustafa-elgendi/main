let hand = ["Rock", "Paper", "Scissors"];
let computerHandEl = document.getElementById("computerHand-el");
let playerHandEl = document.getElementById("playerHand-el");
let resultEl = document.getElementById("result-el");


let playerHand = "";
let computerHand = "";

function chooseComputer() {
  x = Math.floor(Math.random() * 3);
  computerHand = hand[x];
  computerHandEl.innerText = hand[x];
}
function check() {
  if (
    (playerHand === "Rock" && computerHand === "Scissors") ||
    (playerHand === "Paper" && computerHand === "Rock") ||
    (playerHand === "Scissors" && computerHand === "Paper")
  ) {
    chooseComputer();
    resultEl.innerText=("You Win!");
  } else if (
    (computerHand === "Rock" && playerHand === "Scissors") ||
    (computerHand === "Paper" && playerHand === "Rock") ||
    (computerHand === "Scissors" && playerHand === "Paper")
  ) {
    chooseComputer();

    resultEl.innerText=("You Lose!");
  } else {
    chooseComputer();
    resultEl.innerText=("Draw!");
  }
}

function chooseRock() {
  playerHand = "Rock";
  playerHandEl.innerText = playerHand;
  check();
  playerHand = "Rock";
  playerHandEl.innerText = playerHand;
}
function choosePaper() {
    playerHand = "Paper";
    playerHandEl.innerText = playerHand;
    check();
    playerHand = "Paper";
    playerHandEl.innerText = playerHand;
  }
  function chooseScissors() {
    playerHand = "Scissors";
    playerHandEl.innerText = playerHand;
    check();
    playerHand = "Scissors";
    playerHandEl.innerText = playerHand;
  }